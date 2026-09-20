// Interactive globe for the Explore tab: an orthographic projection drawn on a canvas.
// No WebGL — just d3-geo maths and 2D canvas, which stays smooth on phones.
//
// Exposes the same surface as WorldMap (setBaseStates / setState / roll / zoomTo / resetZoom /
// isZoomed / onHover / onSelect / onReset) so the app logic doesn't care which one it's driving.

(function () {
    // Countries too small to have a shape in the data get a marker at their capital instead.
    const MARKERS = {
        AD: [42.51, 1.52], AG: [17.12, -61.85], BH: [26.07, 50.55], BB: [13.19, -59.54], CV: [15.12, -23.6],
        KM: [-11.7, 43.26], DM: [15.31, -61.39], GD: [12.06, -61.75], KI: [1.45, 173.03], LI: [47.14, 9.52],
        MV: [4.17, 73.51], MT: [35.9, 14.51], MH: [7.09, 171.38], MU: [-20.16, 57.5], FM: [6.92, 158.16],
        MC: [43.73, 7.42], NR: [-0.55, 166.92], PW: [7.5, 134.62], KN: [17.3, -62.72], LC: [14.01, -60.99],
        VC: [13.16, -61.22], WS: [-13.83, -171.76], SM: [43.94, 12.45], ST: [0.34, 6.73], SC: [-4.62, 55.45],
        SG: [1.35, 103.82], TO: [-21.14, -175.2], TV: [-8.52, 179.2], VA: [41.9, 12.45]
    };
    // Shapes in the data that aren't countries in the challenge; drawn as plain land.
    const NOT_PLAYABLE = new Set(['AQ']);

    const RAD = Math.PI / 180;
    const easeInOut = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const easeOut = t => 1 - Math.pow(1 - t, 3);
    const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
    const shortestDelta = (from, to) => ((to - from + 540) % 360) - 180;

    class Globe {
        constructor(container, opts = {}) {
            this.container = container;
            this.opts = opts;
            this.states = {};      // current state per code
            this.base = {};        // underlying state per code (flashes are undone back to this)
            this.features = [];    // GeoJSON features with .code
            this.byCode = {};
            this.rotation = [-20, -35];   // [lambda, phi] — start over the Atlantic, tilted north
            this.zoom = 1;
            this.hoverCode = null;
            this.animation = null;
            this.rollTimer = null;
            this.pulseFrame = null;
            this.needsDraw = false;
            this.gesture = { moved: false, dragging: false };

            this.canvas = document.createElement('canvas');
            this.canvas.className = 'globe-canvas';
            this.ctx = this.canvas.getContext('2d');
            this.container.appendChild(this.canvas);

            this.projection = d3.geoOrthographic().clipAngle(90);
            this.path = d3.geoPath(this.projection, this.ctx);
            this.graticule = d3.geoGraticule10();
            this.sphere = { type: 'Sphere' };

            this.readTheme();
            this.resize();
            this.setupGestures();
            this.setupControls();

            new ResizeObserver(() => this.resize()).observe(this.container);
            new MutationObserver(() => { this.readTheme(); this.requestDraw(); })
                .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

            this.ready = this.load();
        }

        async load() {
            const [topo, iso] = await Promise.all([
                fetch('data/countries-110m.json').then(r => r.json()),
                fetch('data/iso-numeric.json').then(r => r.json())
            ]);
            const geo = topojson.feature(topo, topo.objects.countries);
            this.features = geo.features.filter(f => iso[f.id]).map(f => {
                f.code = iso[f.id];
                f.main = mainland(f);
                f.centroid = d3.geoCentroid(f.main);
                this.byCode[f.code] = f;
                return f;
            });
            // Draw big shapes first so small enclaves (Lesotho, Vatican markers…) stay visible on top.
            this.features.sort((a, b) => d3.geoArea(b) - d3.geoArea(a));
            this.requestDraw();
        }

        // --- theme & sizing ---
        readTheme() {
            const cs = getComputedStyle(this.container);
            const v = name => cs.getPropertyValue(name).trim();
            this.colors = {
                water: v('--map-water'), land: v('--map-land'), landHover: v('--map-land-hover'),
                stroke: v('--map-stroke'), border: v('--border-strong'),
                explored: v('--green'), spun: v('--amber'), lit: v('--accent'), selected: v('--accent'),
                selectedStroke: v('--accent-contrast'), grid: v('--text-3'),
                dark: document.documentElement.getAttribute('data-theme') === 'dark'
            };
        }

        resize() {
            const w = this.container.clientWidth, h = this.container.clientHeight;
            if (!w || !h) return;
            // Full sharpness at rest; while moving, render at 1x so phones keep a steady frame rate.
            this.dpr = this.moving ? 1 : Math.min(window.devicePixelRatio || 1, 2);
            this.width = w; this.height = h;
            this.canvas.width = Math.round(w * this.dpr);
            this.canvas.height = Math.round(h * this.dpr);
            this.canvas.style.width = `${w}px`;
            this.canvas.style.height = `${h}px`;
            this.baseScale = Math.min(w, h) / 2 - 14;
            this.projection.translate([w / 2, h / 2]);
            this.requestDraw();
        }

        // --- state ---
        has(code) { return Boolean(this.byCode[code] || MARKERS[code]); }

        setBaseStates(states) {
            this.base = { ...states };
            this.states = { ...states };
            this.requestDraw();
        }

        setState(code, state) {
            this.states[code] = state;
            this.requestDraw();
        }

        restoreState(code) {
            if (this.base[code]) this.states[code] = this.base[code]; else delete this.states[code];
            this.requestDraw();
        }

        isZoomed() { return this.zoom > 1.01; }

        setMoving(moving) {
            if (this.moving === moving) return;
            this.moving = moving;
            this.resize();
        }

        // --- drawing ---
        requestDraw() {
            if (this.needsDraw) return;
            this.needsDraw = true;
            requestAnimationFrame(() => { this.needsDraw = false; this.draw(); });
        }

        draw() {
            const { ctx, colors } = this;
            if (!this.width) return;
            this.projection.rotate([this.rotation[0], this.rotation[1], 0]).scale(this.baseScale * this.zoom);
            ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
            ctx.clearRect(0, 0, this.width, this.height);

            // Ocean: flat colour with a whisper of light from the top-left so it reads as a sphere.
            const r = this.baseScale * this.zoom, cx = this.width / 2, cy = this.height / 2;
            const grad = ctx.createRadialGradient(cx - r * 0.35, cy - r * 0.35, r * 0.1, cx, cy, r);
            grad.addColorStop(0, colors.dark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.55)');
            grad.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.beginPath(); this.path(this.sphere);
            ctx.fillStyle = colors.water; ctx.fill();
            ctx.fillStyle = grad; ctx.fill();

            ctx.beginPath(); this.path(this.graticule);
            ctx.strokeStyle = colors.grid; ctx.globalAlpha = colors.dark ? 0.08 : 0.12; ctx.lineWidth = 0.5; ctx.stroke();
            ctx.globalAlpha = 1;

            // Countries. Stroke width stays constant on screen regardless of zoom.
            ctx.lineJoin = 'round';
            ctx.lineWidth = 0.7;
            ctx.strokeStyle = colors.stroke;
            const selected = [];
            for (const f of this.features) {
                const state = NOT_PLAYABLE.has(f.code) ? null : this.states[f.code];
                if (state === 'selected') { selected.push(f); continue; }
                ctx.beginPath(); this.path(f);
                ctx.fillStyle = this.fillFor(state, f.code);
                ctx.fill(); ctx.stroke();
            }
            for (const f of selected) {
                ctx.beginPath(); this.path(f);
                ctx.fillStyle = colors.selected; ctx.fill();
                ctx.strokeStyle = colors.selectedStroke; ctx.lineWidth = 1.6;
                ctx.globalAlpha = 0.5 + 0.4 * Math.sin(performance.now() / 300);
                ctx.stroke();
                ctx.globalAlpha = 1; ctx.lineWidth = 0.7; ctx.strokeStyle = colors.stroke;
            }

            // Markers for the microstates, only on the visible hemisphere.
            for (const code of Object.keys(MARKERS)) {
                const pt = this.projectVisible(MARKERS[code]);
                if (!pt) continue;
                const state = this.states[code];
                const big = state === 'selected' || state === 'lit';
                ctx.beginPath();
                ctx.arc(pt[0], pt[1], big ? 6 : 2 + 0.5 * Math.min(this.zoom, 4), 0, Math.PI * 2);
                ctx.fillStyle = this.fillFor(state, code, true);
                ctx.fill();
                ctx.strokeStyle = state === 'selected' ? colors.selectedStroke : colors.stroke;
                ctx.lineWidth = state === 'selected' ? 2 : 0.8;
                ctx.stroke();
            }

            // Rim.
            ctx.beginPath(); this.path(this.sphere);
            ctx.strokeStyle = colors.border; ctx.lineWidth = 1; ctx.globalAlpha = 0.6; ctx.stroke();
            ctx.globalAlpha = 1;

            // Keep the selected outline pulsing without a full animation loop elsewhere.
            if (selected.length && !this.animation && !this.pulseFrame) {
                this.pulseFrame = setTimeout(() => { this.pulseFrame = null; this.requestDraw(); }, 60);
            }
        }

        fillFor(state, code, marker = false) {
            const c = this.colors;
            switch (state) {
                case 'explored': return c.explored;
                case 'spun': return c.spun;
                case 'lit': return c.lit;
                case 'selected': return c.selected;
                default: return code === this.hoverCode ? c.landHover : marker ? c.landHover : c.land;
            }
        }

        // [lat, lon] -> screen point, or null if on the far side of the globe.
        projectVisible([lat, lon]) {
            const centre = [-this.rotation[0], -this.rotation[1]];
            if (d3.geoDistance([lon, lat], centre) > Math.PI / 2 - 0.02) return null;
            return this.projection([lon, lat]);
        }

        // --- hit testing ---
        codeAt(x, y) {
            const p = this.projection.invert([x, y]);
            if (!p || Number.isNaN(p[0])) return null;
            const centre = [-this.rotation[0], -this.rotation[1]];
            if (d3.geoDistance(p, centre) > Math.PI / 2) return null;
            // Markers first (a marker inside a country would otherwise never win), with a target that
            // grows a little with zoom so microstates are easy to hit once you've zoomed in.
            let best = null, bestD = 6 + 2 * Math.min(this.zoom, 4);
            for (const code of Object.keys(MARKERS)) {
                const pt = this.projectVisible(MARKERS[code]);
                if (!pt) continue;
                const d = Math.hypot(pt[0] - x, pt[1] - y);
                if (d < bestD) { best = code; bestD = d; }
            }
            if (best) return best;
            for (const f of this.features) {
                if (NOT_PLAYABLE.has(f.code)) continue;
                if (d3.geoContains(f, p)) return f.code;
            }
            return null;
        }

        // --- animation ---
        animateTo({ rotation, zoom, duration = 900, ease = easeInOut, onFrame, raw = false }) {
            this.cancelAnimation();
            const from = { rotation: [...this.rotation], zoom: this.zoom };
            // `raw` keeps the longitude exactly as given (the roll passes several full turns);
            // otherwise take the shortest way round.
            const target = {
                rotation: rotation
                    ? [raw ? rotation[0] : from.rotation[0] + shortestDelta(from.rotation[0], rotation[0]), clamp(rotation[1], -90, 90)]
                    : from.rotation,
                zoom: zoom ?? from.zoom
            };
            const start = performance.now();
            this.setMoving(true);
            return new Promise(resolve => {
                const apply = t => {
                    const k = ease(t);
                    this.rotation = [
                        from.rotation[0] + (target.rotation[0] - from.rotation[0]) * k,
                        from.rotation[1] + (target.rotation[1] - from.rotation[1]) * k
                    ];
                    this.zoom = from.zoom + (target.zoom - from.zoom) * k;
                    if (onFrame) onFrame(t);
                    this.draw();
                };
                const finish = () => {
                    this.cancelAnimation(); apply(1);
                    this.rotation[0] = ((this.rotation[0] + 180) % 360 + 360) % 360 - 180;   // keep the number sane
                    this.setMoving(false);
                    this.updateControls(); resolve();
                };
                const step = now => {
                    const t = Math.min(1, (now - start) / duration);
                    if (t >= 1) return finish();
                    apply(t);
                    this.animation.frame = requestAnimationFrame(step);
                };
                // Frames don't run in a hidden tab; the timer guarantees the flow still completes.
                this.animation = {
                    frame: document.hidden ? 0 : requestAnimationFrame(step),
                    timer: setTimeout(finish, document.hidden ? 0 : duration + 250)
                };
            });
        }

        cancelAnimation() {
            if (!this.animation) return;
            cancelAnimationFrame(this.animation.frame);
            clearTimeout(this.animation.timer);
            this.animation = null;
        }

        rotationFor(code) {
            const f = this.byCode[code];
            const c = f ? f.centroid : MARKERS[code] ? [MARKERS[code][1], MARKERS[code][0]] : null;
            return c ? [-c[0], -c[1]] : null;
        }

        // How far to zoom so the country fills a good chunk of the view.
        zoomFor(code) {
            const f = this.byCode[code];
            if (!f) return 4.5;                       // marker-only country: show the neighbourhood
            const [[w, s], [e, n]] = d3.geoBounds(f.main);
            const span = Math.max(((e - w + 360) % 360) || 360, n - s);   // degrees
            const px = this.baseScale * span * RAD;   // approx on-screen size at zoom 1 near the centre
            const want = Math.min(this.width, this.height) * 0.5;
            return clamp(want / px, 1.4, 6);
        }

        zoomTo(code, duration = 1200) {
            const rotation = this.rotationFor(code);
            if (!rotation) return Promise.resolve();
            return this.animateTo({ rotation, zoom: this.zoomFor(code), duration });
        }

        resetZoom(duration = 800) {
            return this.animateTo({ zoom: 1, duration });
        }

        /**
         * The selection roll: spin the globe a few times, lighting up countries as they pass the
         * front, decelerating until the winner is centred and highlighted.
         */
        roll(candidates, winner, { duration = 3600 } = {}) {
            this.cancelRoll();
            this.container.classList.add('is-rolling');
            const pool = candidates.filter(c => c !== winner && this.has(c));
            const target = this.rotationFor(winner) || this.rotation;
            const turns = 2;
            const endLambda = this.rotation[0] - turns * 360 + shortestDelta(this.rotation[0], target[0]);
            const lit = new Set();
            let last = null;
            const start = performance.now();

            const flash = code => {
                this.setState(code, 'lit'); lit.add(code);
                setTimeout(() => { if (this.states[code] === 'lit') this.restoreState(code); lit.delete(code); }, 420);
            };
            const visiblePool = () => {
                const centre = [-this.rotation[0], -this.rotation[1]];
                return pool.filter(c => {
                    const f = this.byCode[c];
                    const p = f ? f.centroid : [MARKERS[c][1], MARKERS[c][0]];
                    return d3.geoDistance(p, centre) < 60 * RAD;
                });
            };
            const tick = () => {
                const t = Math.min(1, (performance.now() - start) / duration);
                if (t >= 0.97 || pool.length === 0) { this.rollTimer = null; return; }
                const front = visiblePool();
                const choices = front.length ? front : pool;
                let code = choices[Math.floor(Math.random() * choices.length)];
                if (code === last && choices.length > 1) code = choices[(choices.indexOf(code) + 1) % choices.length];
                last = code;
                flash(code);
                this.rollTimer = setTimeout(tick, 55 + 325 * t * t);
            };
            tick();

            return this.animateTo({
                rotation: [endLambda, target[1]], zoom: 1, duration, ease: easeOut, raw: true
            }).then(() => {
                this.cancelRoll();
                lit.forEach(c => this.restoreState(c));
                this.setState(winner, 'selected');
            });
        }

        cancelRoll() {
            if (this.rollTimer) { clearTimeout(this.rollTimer); this.rollTimer = null; }
            this.container.classList.remove('is-rolling');
        }

        // --- gestures: drag to rotate, pinch/wheel to zoom, tap to select ---
        setupGestures() {
            const el = this.canvas;
            const pointers = new Map();
            const g = this.gesture;
            let hoverPending = null;

            const midpoint = () => { const [a, b] = [...pointers.values()]; return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; };
            const distance = () => { const [a, b] = [...pointers.values()]; return Math.hypot(a.x - b.x, a.y - b.y); };
            const local = e => { const r = el.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
            const rotateBy = (dx, dy) => {
                const k = 0.28 / Math.sqrt(this.zoom);
                this.rotation = [this.rotation[0] + dx * k, clamp(this.rotation[1] - dy * k, -90, 90)];
                this.requestDraw();
            };

            el.addEventListener('pointerdown', e => {
                if (this.rollTimer) return;
                this.cancelAnimation();
                pointers.set(e.pointerId, local(e));
                try { el.setPointerCapture(e.pointerId); } catch (_) { /* synthetic events have no active pointer */ }
                this.setMoving(true);
                g.moved = false;
                if (pointers.size === 1) g.last = local(e);
                if (pointers.size === 2) { g.pinchDist = distance(); g.last = midpoint(); }
            });

            el.addEventListener('pointermove', e => {
                if (!pointers.has(e.pointerId)) {
                    // Plain hover (mouse only): hit-test at most once per frame.
                    if (e.pointerType === 'mouse' && this.opts.onHover && !hoverPending) {
                        hoverPending = requestAnimationFrame(() => {
                            hoverPending = null;
                            const p = local(e);
                            const code = this.codeAt(p.x, p.y);
                            if (code !== this.hoverCode) { this.hoverCode = code; this.requestDraw(); }
                            this.opts.onHover(code, e);
                        });
                    }
                    return;
                }
                pointers.set(e.pointerId, local(e));
                if (pointers.size === 2) {
                    const d = distance(), mid = midpoint();
                    if (g.pinchDist) this.setZoom(this.zoom * d / g.pinchDist);
                    rotateBy(mid.x - g.last.x, mid.y - g.last.y);
                    g.pinchDist = d; g.last = mid; g.moved = true; g.dragging = true;
                } else if (pointers.size === 1 && g.last) {
                    const p = local(e);
                    const dx = p.x - g.last.x, dy = p.y - g.last.y;
                    if (!g.moved && Math.hypot(dx, dy) < 6) return;   // tap tolerance
                    g.moved = true; g.dragging = true;
                    rotateBy(dx, dy);
                    g.last = p;
                }
            });

            const end = e => {
                const wasTap = pointers.has(e.pointerId) && !g.moved;
                const p = local(e);
                pointers.delete(e.pointerId);
                if (pointers.size === 0) { g.dragging = false; g.last = null; g.pinchDist = 0; this.setMoving(false); }
                else if (pointers.size === 1) { g.last = [...pointers.values()][0]; g.pinchDist = 0; }
                if (wasTap && e.type === 'pointerup' && this.opts.onSelect && !this.rollTimer) {
                    const code = this.codeAt(p.x, p.y);
                    if (code) this.opts.onSelect(code);
                }
            };
            el.addEventListener('pointerup', end);
            el.addEventListener('pointercancel', end);
            el.addEventListener('pointerleave', e => {
                if (this.hoverCode) { this.hoverCode = null; this.requestDraw(); }
                if (this.opts.onHover) this.opts.onHover(null, e);
            });

            el.addEventListener('wheel', e => {
                if (this.rollTimer) return;
                e.preventDefault();
                this.setZoom(this.zoom * Math.exp(-e.deltaY * 0.0015));
            }, { passive: false });
        }

        setZoom(z) {
            this.cancelAnimation();
            this.zoom = clamp(z, 1, 8);
            this.updateControls();
            this.requestDraw();
        }

        setupControls() {
            const wrap = document.createElement('div');
            wrap.className = 'map-controls';
            const make = (label, title, onClick) => {
                const b = document.createElement('button');
                b.type = 'button'; b.className = 'icon-btn map-ctl'; b.textContent = label; b.title = title; b.setAttribute('aria-label', title);
                b.onclick = onClick;
                wrap.appendChild(b);
                return b;
            };
            make('+', 'Zoom in', () => this.animateTo({ zoom: clamp(this.zoom * 1.6, 1, 8), duration: 350 }));
            make('−', 'Zoom out', () => this.animateTo({ zoom: clamp(this.zoom / 1.6, 1, 8), duration: 350 }));
            this.resetButton = make('⤢', 'Show whole globe', () => { this.resetZoom(700); if (this.opts.onReset) this.opts.onReset(); });
            this.container.appendChild(wrap);
            this.updateControls();
        }

        updateControls() {
            const zoomed = this.isZoomed();
            if (this.resetButton) this.resetButton.classList.toggle('hidden', !zoomed);
            this.container.classList.toggle('is-zoomed', zoomed);
        }
    }

    // For countries with far-flung territories (France, USA…) frame the mainland rather than
    // everything: keep polygons at least a quarter the size of the largest.
    function mainland(feature) {
        if (feature.geometry.type !== 'MultiPolygon') return feature;
        const polys = feature.geometry.coordinates.map(coords => ({ type: 'Polygon', coordinates: coords }));
        const areas = polys.map(p => d3.geoArea(p));
        const largest = Math.max(...areas);
        const keep = polys.filter((p, i) => areas[i] >= largest * 0.25);
        return { type: 'MultiPolygon', coordinates: keep.map(p => p.coordinates) };
    }

    window.Globe = Globe;
})();
