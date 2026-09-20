// Lightweight world map renderer built on the jsvectormap "world" path data.
// Renders a single inline SVG so we control every animation ourselves:
// per-country state colours, the "ignite" selection roll and a smooth viewBox zoom.

(function () {
    const MAP = window.MAP_DATA.world;
    const BASE_W = MAP.width;
    const BASE_H = MAP.height;
    const ASPECT = BASE_W / BASE_H;

    // Countries too small to have a shape in the map data get a marker at their capital instead.
    const MARKERS = {
        AD: [42.51, 1.52], AG: [17.12, -61.85], BH: [26.07, 50.55], BB: [13.19, -59.54], CV: [15.12, -23.6],
        KM: [-11.7, 43.26], DM: [15.31, -61.39], GD: [12.06, -61.75], KI: [1.45, 173.03], LI: [47.14, 9.52],
        MV: [4.17, 73.51], MT: [35.9, 14.51], MH: [7.09, 171.38], MU: [-20.16, 57.5], FM: [6.92, 158.16],
        MC: [43.73, 7.42], NR: [-0.55, 166.92], PW: [7.5, 134.62], KN: [17.3, -62.72], LC: [14.01, -60.99],
        VC: [13.16, -61.22], WS: [-13.83, -171.76], SM: [43.94, 12.45], ST: [0.34, 6.73], SC: [-4.62, 55.45],
        SG: [1.35, 103.82], TO: [-21.14, -175.2], TV: [-8.52, 179.2], VA: [41.9, 12.45]
    };

    // Miller projection, matching the parameters the map data was generated with.
    const RADIUS = 6381372;
    const DEG = Math.PI / 180;
    const bbox = MAP.insets[0].bbox;
    const scale = BASE_W / (bbox[1].x - bbox[0].x);
    function project(lat, lon) {
        const x = RADIUS * (lon - MAP.projection.centralMeridian) * DEG;
        const y = -RADIUS * Math.log(Math.tan((45 + 0.4 * lat) * DEG)) / 0.8;
        return { x: (x - bbox[0].x) * scale, y: (y - bbox[0].y) * scale };
    }

    // Walk a path string and return the bounding box of its main landmass(es), ignoring far-flung
    // territories (e.g. French Guiana for France, Alaska for the US) so zooms frame the mainland.
    function mainlandBounds(d) {
        const parts = [];
        let x = 0, y = 0, cur = null;
        const re = /([MmLlZz])([^MmLlZz]*)/g;
        let m;
        while ((m = re.exec(d))) {
            const cmd = m[1];
            if (cmd === 'M' || cmd === 'm') {
                cur = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
                parts.push(cur);
            }
            if (cmd === 'Z' || cmd === 'z') continue;
            const nums = m[2].trim().split(/[\s,]+/).filter(Boolean).map(Number);
            for (let i = 0; i + 1 < nums.length; i += 2) {
                if (cmd === 'M' || cmd === 'L') { x = nums[i]; y = nums[i + 1]; }
                else { x += nums[i]; y += nums[i + 1]; }
                cur.minX = Math.min(cur.minX, x); cur.maxX = Math.max(cur.maxX, x);
                cur.minY = Math.min(cur.minY, y); cur.maxY = Math.max(cur.maxY, y);
            }
        }
        parts.forEach(p => p.area = (p.maxX - p.minX) * (p.maxY - p.minY));
        const largest = Math.max(...parts.map(p => p.area));
        const keep = parts.filter(p => p.area >= largest * 0.25);
        return {
            minX: Math.min(...keep.map(p => p.minX)), maxX: Math.max(...keep.map(p => p.maxX)),
            minY: Math.min(...keep.map(p => p.minY)), maxY: Math.max(...keep.map(p => p.maxY))
        };
    }

    const easeInOut = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    class WorldMap {
        /**
         * @param {HTMLElement} container
         * @param {{ onHover?: (code: string|null, event: PointerEvent) => void, onSelect?: (code: string) => void }} opts
         */
        constructor(container, opts = {}) {
            this.container = container;
            this.opts = opts;
            this.gesture = { dragging: false, moved: false };
            this.elements = {};
            this.boundsCache = {};
            this.view = { x: 0, y: 0, w: BASE_W, h: BASE_H };
            this.animation = null;
            this.rollTimer = null;
            this.build();
        }

        build() {
            const ns = 'http://www.w3.org/2000/svg';
            const svg = document.createElementNS(ns, 'svg');
            svg.setAttribute('viewBox', `0 0 ${BASE_W} ${BASE_H}`);
            svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
            svg.classList.add('world-map');

            const land = document.createElementNS(ns, 'g');
            land.classList.add('land');
            Object.keys(MAP.paths).forEach(code => {
                const p = document.createElementNS(ns, 'path');
                p.setAttribute('d', MAP.paths[code].path);
                p.dataset.code = code;
                p.classList.add('country');
                land.appendChild(p);
                this.elements[code] = p;
            });
            svg.appendChild(land);

            const markers = document.createElementNS(ns, 'g');
            markers.classList.add('markers');
            Object.keys(MARKERS).forEach(code => {
                const [lat, lon] = MARKERS[code];
                const { x, y } = project(lat, lon);
                const c = document.createElementNS(ns, 'circle');
                c.setAttribute('cx', x); c.setAttribute('cy', y); c.setAttribute('r', 2.2);
                c.dataset.code = code;
                c.classList.add('country', 'marker');
                markers.appendChild(c);
                this.elements[code] = c;
                this.boundsCache[code] = { minX: x, maxX: x, minY: y, maxY: y };
            });
            svg.appendChild(markers);

            // A single delegated listener keeps things cheap on touch devices.
            const hover = e => {
                if (this.gesture.dragging) return;
                const code = e.target.dataset ? e.target.dataset.code : null;
                if (this.opts.onHover) this.opts.onHover(code || null, e);
            };
            svg.addEventListener('pointermove', hover);
            svg.addEventListener('pointerdown', hover);
            svg.addEventListener('pointerleave', e => this.opts.onHover && this.opts.onHover(null, e));
            svg.addEventListener('click', e => {
                if (this.gesture.moved) return;   // a drag that ended on a country isn't a tap
                const code = e.target.dataset ? e.target.dataset.code : null;
                if (code && this.opts.onSelect) this.opts.onSelect(code);
            });

            this.svg = svg;
            this.container.appendChild(svg);
            this.setupGestures();
            this.setupControls();
        }

        // --- Pan, pinch and wheel zoom ---
        setupGestures() {
            const svg = this.svg;
            const pointers = new Map();
            const g = this.gesture = { dragging: false, moved: false, last: null, pinchDist: 0 };

            const unitsPerPixel = () => this.view.w / svg.clientWidth;
            const midpoint = () => {
                const pts = [...pointers.values()];
                return { x: (pts[0].x + pts[1].x) / 2, y: (pts[0].y + pts[1].y) / 2 };
            };
            const distance = () => {
                const [a, b] = [...pointers.values()];
                return Math.hypot(a.x - b.x, a.y - b.y);
            };

            svg.addEventListener('pointerdown', e => {
                if (this.rollTimer) return;
                pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
                svg.setPointerCapture(e.pointerId);
                g.moved = false;
                if (pointers.size === 1) g.last = { x: e.clientX, y: e.clientY };
                if (pointers.size === 2) { g.pinchDist = distance(); g.last = midpoint(); }
            });

            svg.addEventListener('pointermove', e => {
                if (!pointers.has(e.pointerId)) return;
                pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
                const upp = unitsPerPixel();

                if (pointers.size === 2) {
                    const d = distance(), mid = midpoint();
                    if (g.pinchDist) this.zoomBy(d / g.pinchDist, this.pointToUnits(mid.x, mid.y));
                    this.panBy((g.last.x - mid.x) * upp, (g.last.y - mid.y) * upp);
                    g.pinchDist = d; g.last = mid; g.moved = true; g.dragging = true;
                } else if (pointers.size === 1 && g.last) {
                    const dx = e.clientX - g.last.x, dy = e.clientY - g.last.y;
                    if (!g.moved && Math.hypot(dx, dy) < 6) return;   // tap tolerance
                    // Only pan when zoomed in; at world view a drag would just fight the page scroll.
                    if (!this.isZoomed()) return;
                    g.moved = true; g.dragging = true;
                    this.panBy(-dx * upp, -dy * upp);
                    g.last = { x: e.clientX, y: e.clientY };
                }
            });

            const end = e => {
                pointers.delete(e.pointerId);
                if (pointers.size === 0) { g.dragging = false; g.last = null; g.pinchDist = 0; }
                else if (pointers.size === 1) { const p = [...pointers.values()][0]; g.last = { x: p.x, y: p.y }; g.pinchDist = 0; }
                // Keep `moved` until the click event that follows pointerup has been seen.
                setTimeout(() => { if (pointers.size === 0) g.moved = false; }, 0);
            };
            svg.addEventListener('pointerup', end);
            svg.addEventListener('pointercancel', end);

            svg.addEventListener('wheel', e => {
                if (this.rollTimer) return;
                e.preventDefault();
                this.zoomBy(Math.exp(-e.deltaY * 0.0015), this.pointToUnits(e.clientX, e.clientY));
            }, { passive: false });
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
            make('+', 'Zoom in', () => this.zoomBy(1.6));
            make('−', 'Zoom out', () => this.zoomBy(1 / 1.6));
            this.resetButton = make('⤢', 'Show whole world', () => { this.resetZoom(700); if (this.opts.onReset) this.opts.onReset(); });
            this.container.appendChild(wrap);
            this.updateControls();
        }

        updateControls() {
            const zoomed = this.isZoomed();
            if (this.resetButton) this.resetButton.classList.toggle('hidden', !zoomed);
            // At world view the page keeps vertical scrolling; once zoomed the map owns the touch.
            this.container.classList.toggle('is-zoomed', zoomed);
        }

        // Screen pixel -> map units for the current view.
        pointToUnits(clientX, clientY) {
            const r = this.svg.getBoundingClientRect();
            // The viewBox is letterboxed with "meet": work out the rendered scale and offset.
            const scale = Math.min(r.width / this.view.w, r.height / this.view.h);
            const ox = (r.width - this.view.w * scale) / 2, oy = (r.height - this.view.h * scale) / 2;
            return { x: this.view.x + (clientX - r.left - ox) / scale, y: this.view.y + (clientY - r.top - oy) / scale };
        }

        clampView(v) {
            const w = Math.min(BASE_W, Math.max(BASE_W / 14, v.w));
            const h = w / ASPECT;
            const x = Math.min(Math.max(v.x, -w * 0.25), BASE_W - w * 0.75);
            const y = Math.min(Math.max(v.y, -h * 0.25), BASE_H - h * 0.75);
            return { x, y, w, h };
        }

        setView(v) {
            this.cancelAnimation();
            this.view = this.clampView(v);
            this.svg.setAttribute('viewBox', `${this.view.x} ${this.view.y} ${this.view.w} ${this.view.h}`);
            this.svg.style.setProperty('--zoom', (BASE_W / this.view.w).toFixed(3));
            this.updateControls();
        }

        /** Zoom by a factor, keeping `anchor` (map units) fixed on screen; defaults to the centre. */
        zoomBy(factor, anchor) {
            const v = this.view;
            const a = anchor || { x: v.x + v.w / 2, y: v.y + v.h / 2 };
            const w = Math.min(BASE_W, Math.max(BASE_W / 14, v.w / factor));
            const k = w / v.w;
            if (Math.abs(1 - k) < 1e-4) return;
            this.setView({ x: a.x - (a.x - v.x) * k, y: a.y - (a.y - v.y) * k, w, h: w / ASPECT });
        }

        panBy(dx, dy) {
            this.setView({ ...this.view, x: this.view.x + dx, y: this.view.y + dy });
        }

        has(code) { return Boolean(this.elements[code]); }

        isZoomed() { return this.view.x !== 0 || this.view.y !== 0 || this.view.w !== BASE_W; }

        /** state: 'available' | 'explored' | 'spun' | 'lit' | 'selected' | 'dim' */
        setState(code, state) {
            const el = this.elements[code];
            if (el) el.dataset.state = state;
        }

        bounds(code) {
            if (!this.boundsCache[code]) this.boundsCache[code] = mainlandBounds(MAP.paths[code].path);
            return this.boundsCache[code];
        }

        // Frame a country: pad its bounds, enforce a minimum size so tiny places aren't a blurry blob,
        // and keep the base aspect ratio so nothing letterboxes mid-animation.
        targetView(code) {
            const b = this.bounds(code);
            const cx = (b.minX + b.maxX) / 2, cy = (b.minY + b.maxY) / 2;
            // Marker-only countries have no shape to frame, so keep more of the neighbourhood in view.
            const minW = b.maxX === b.minX ? 200 : 70;
            let w = Math.max((b.maxX - b.minX) * 1.9, minW);
            let h = Math.max((b.maxY - b.minY) * 1.9, minW / ASPECT);
            if (w / h > ASPECT) h = w / ASPECT; else w = h * ASPECT;
            return { x: cx - w / 2, y: cy - h / 2, w, h };
        }

        zoomTo(code, duration = 1200) {
            return this.animateView(this.targetView(code), duration);
        }

        resetZoom(duration = 900) {
            return this.animateView({ x: 0, y: 0, w: BASE_W, h: BASE_H }, duration);
        }

        animateView(target, duration) {
            this.cancelAnimation();
            const from = { ...this.view };
            const start = performance.now();
            return new Promise(resolve => {
                const apply = view => {
                    this.view = view;
                    this.svg.setAttribute('viewBox', `${view.x} ${view.y} ${view.w} ${view.h}`);
                    // Keep strokes and markers visually constant while zoomed in.
                    this.svg.style.setProperty('--zoom', (BASE_W / view.w).toFixed(3));
                };
                const finish = () => {
                    this.cancelAnimation();
                    apply(target);
                    this.svg.classList.remove('is-animating');
                    this.updateControls();
                    resolve();
                };
                this.svg.classList.add('is-animating');
                const step = now => {
                    const t = Math.min(1, (now - start) / duration);
                    if (t >= 1) return finish();
                    const k = easeInOut(t);
                    apply({
                        x: from.x + (target.x - from.x) * k,
                        y: from.y + (target.y - from.y) * k,
                        w: from.w + (target.w - from.w) * k,
                        h: from.h + (target.h - from.h) * k
                    });
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

        /**
         * The selection roll: light up random candidates, quickly at first and then slowing down,
         * finishing on the winner. Resolves once the winner is highlighted.
         */
        roll(candidates, winner, { duration = 3200, onTick } = {}) {
            this.cancelRoll();
            this.svg.classList.add('is-rolling');
            const pool = candidates.filter(c => this.elements[c] && c !== winner);
            const start = performance.now();
            let last = null;
            const lit = new Set();

            return new Promise(resolve => {
                const flash = code => {
                    this.setState(code, 'lit');
                    lit.add(code);
                    if (onTick) onTick(code);
                    setTimeout(() => {
                        if (lit.has(code) && this.elements[code].dataset.state === 'lit') this.restoreState(code);
                        lit.delete(code);
                    }, 420);
                };
                const tick = () => {
                    const t = Math.min(1, (performance.now() - start) / duration);
                    if (t >= 1 || pool.length === 0) {
                        this.setState(winner, 'selected');
                        this.rollTimer = null;
                        this.svg.classList.remove('is-rolling');
                        resolve();
                        return;
                    }
                    let code = pool[Math.floor(Math.random() * pool.length)];
                    if (code === last && pool.length > 1) code = pool[(pool.indexOf(code) + 1) % pool.length];
                    last = code;
                    flash(code);
                    // Interval grows from ~55ms to ~380ms as the roll winds down.
                    const interval = 55 + 325 * t * t;
                    this.rollTimer = setTimeout(tick, interval);
                };
                tick();
            });
        }

        cancelRoll() {
            if (this.rollTimer) { clearTimeout(this.rollTimer); this.rollTimer = null; }
            this.svg.classList.remove('is-rolling');
        }

        // Called after a flash ends: return the country to whatever its underlying state is.
        restoreState(code) {
            const el = this.elements[code];
            if (el) el.dataset.state = el.dataset.base || 'available';
        }

        /** Remember base states so flashes can be undone without the caller tracking them. */
        setBaseStates(states) {
            Object.keys(this.elements).forEach(code => {
                const el = this.elements[code];
                el.dataset.base = states[code] || 'available';
                el.dataset.state = el.dataset.base;
            });
        }
    }

    window.WorldMap = WorldMap;
})();
