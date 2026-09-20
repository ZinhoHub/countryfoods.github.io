const countriesFull = [
    {name: "Afghanistan", code: "AF", continent: "Asia"}, {name: "Albania", code: "AL", continent: "Europe"}, {name: "Algeria", code: "DZ", continent: "Africa"},
    {name: "Andorra", code: "AD", continent: "Europe"}, {name: "Angola", code: "AO", continent: "Africa"}, {name: "Antigua and Barbuda", code: "AG", continent: "Americas"},
    {name: "Argentina", code: "AR", continent: "Americas"}, {name: "Armenia", code: "AM", continent: "Asia"}, {name: "Australia", code: "AU", continent: "Oceania"},
    {name: "Austria", code: "AT", continent: "Europe"}, {name: "Azerbaijan", code: "AZ", continent: "Asia"}, {name: "Bahamas", code: "BS", continent: "Americas"},
    {name: "Bahrain", code: "BH", continent: "Asia"}, {name: "Bangladesh", code: "BD", continent: "Asia"}, {name: "Barbados", code: "BB", continent: "Americas"},
    {name: "Belarus", code: "BY", continent: "Europe"}, {name: "Belgium", code: "BE", continent: "Europe"}, {name: "Belize", code: "BZ", continent: "Americas"},
    {name: "Benin", code: "BJ", continent: "Africa"}, {name: "Bhutan", code: "BT", continent: "Asia"}, {name: "Bolivia", code: "BO", continent: "Americas"},
    {name: "Bosnia and Herzegovina", code: "BA", continent: "Europe"}, {name: "Botswana", code: "BW", continent: "Africa"}, {name: "Brazil", code: "BR", continent: "Americas"},
    {name: "Brunei", code: "BN", continent: "Asia"}, {name: "Bulgaria", code: "BG", continent: "Europe"}, {name: "Burkina Faso", code: "BF", continent: "Africa"},
    {name: "Burundi", code: "BI", continent: "Africa"}, {name: "Cabo Verde", code: "CV", continent: "Africa"}, {name: "Cambodia", code: "KH", continent: "Asia"},
    {name: "Cameroon", code: "CM", continent: "Africa"}, {name: "Canada", code: "CA", continent: "Americas"}, {name: "Central African Republic", code: "CF", continent: "Africa"},
    {name: "Chad", code: "TD", continent: "Africa"}, {name: "Chile", code: "CL", continent: "Americas"}, {name: "China", code: "CN", continent: "Asia"},
    {name: "Colombia", code: "CO", continent: "Americas"}, {name: "Comoros", code: "KM", continent: "Africa"}, {name: "Congo", code: "CG", continent: "Africa"},
    {name: "DR Congo", code: "CD", continent: "Africa"}, {name: "Costa Rica", code: "CR", continent: "Americas"}, {name: "Croatia", code: "HR", continent: "Europe"},
    {name: "Cuba", code: "CU", continent: "Americas"}, {name: "Cyprus", code: "CY", continent: "Asia"}, {name: "Czechia", code: "CZ", continent: "Europe"},
    {name: "Denmark", code: "DK", continent: "Europe"}, {name: "Djibouti", code: "DJ", continent: "Africa"}, {name: "Dominica", code: "DM", continent: "Americas"},
    {name: "Dominican Republic", code: "DO", continent: "Americas"}, {name: "Ecuador", code: "EC", continent: "Americas"}, {name: "Egypt", code: "EG", continent: "Africa"},
    {name: "El Salvador", code: "SV", continent: "Americas"}, {name: "Equatorial Guinea", code: "GQ", continent: "Africa"}, {name: "Eritrea", code: "ER", continent: "Africa"},
    {name: "Estonia", code: "EE", continent: "Europe"}, {name: "Eswatini", code: "SZ", continent: "Africa"}, {name: "Ethiopia", code: "ET", continent: "Africa"},
    {name: "Fiji", code: "FJ", continent: "Oceania"}, {name: "Finland", code: "FI", continent: "Europe"}, {name: "France", code: "FR", continent: "Europe"},
    {name: "Gabon", code: "GA", continent: "Africa"}, {name: "Gambia", code: "GM", continent: "Africa"}, {name: "Georgia", code: "GE", continent: "Asia"},
    {name: "Germany", code: "DE", continent: "Europe"}, {name: "Ghana", code: "GH", continent: "Africa"}, {name: "Greece", code: "GR", continent: "Europe"},
    {name: "Grenada", code: "GD", continent: "Americas"}, {name: "Guatemala", code: "GT", continent: "Americas"}, {name: "Guinea", code: "GN", continent: "Africa"},
    {name: "Guinea-Bissau", code: "GW", continent: "Africa"}, {name: "Guyana", code: "GY", continent: "Americas"}, {name: "Haiti", code: "HT", continent: "Americas"},
    {name: "Honduras", code: "HN", continent: "Americas"}, {name: "Hungary", code: "HU", continent: "Europe"}, {name: "Iceland", code: "IS", continent: "Europe"},
    {name: "India", code: "IN", continent: "Asia"}, {name: "Indonesia", code: "ID", continent: "Asia"}, {name: "Iran", code: "IR", continent: "Asia"},
    {name: "Iraq", code: "IQ", continent: "Asia"}, {name: "Ireland", code: "IE", continent: "Europe"}, {name: "Israel", code: "IL", continent: "Asia"},
    {name: "Italy", code: "IT", continent: "Europe"}, {name: "Jamaica", code: "JM", continent: "Americas"}, {name: "Japan", code: "JP", continent: "Asia"},
    {name: "Jordan", code: "JO", continent: "Asia"}, {name: "Kazakhstan", code: "KZ", continent: "Asia"}, {name: "Kenya", code: "KE", continent: "Africa"},
    {name: "Kiribati", code: "KI", continent: "Oceania"}, {name: "North Korea", code: "KP", continent: "Asia"}, {name: "South Korea", code: "KR", continent: "Asia"},
    {name: "Kuwait", code: "KW", continent: "Asia"}, {name: "Kyrgyzstan", code: "KG", continent: "Asia"}, {name: "Laos", code: "LA", continent: "Asia"},
    {name: "Latvia", code: "LV", continent: "Europe"}, {name: "Lebanon", code: "LB", continent: "Asia"}, {name: "Lesotho", code: "LS", continent: "Africa"},
    {name: "Liberia", code: "LR", continent: "Africa"}, {name: "Libya", code: "LY", continent: "Africa"}, {name: "Liechtenstein", code: "LI", continent: "Europe"},
    {name: "Lithuania", code: "LT", continent: "Europe"}, {name: "Luxembourg", code: "LU", continent: "Europe"}, {name: "Madagascar", code: "MG", continent: "Africa"},
    {name: "Malawi", code: "MW", continent: "Africa"}, {name: "Malaysia", code: "MY", continent: "Asia"}, {name: "Maldives", code: "MV", continent: "Asia"},
    {name: "Mali", code: "ML", continent: "Africa"}, {name: "Malta", code: "MT", continent: "Europe"}, {name: "Marshall Islands", code: "MH", continent: "Oceania"},
    {name: "Mauritania", code: "MR", continent: "Africa"}, {name: "Mauritius", code: "MU", continent: "Africa"}, {name: "Mexico", code: "MX", continent: "Americas"},
    {name: "Micronesia", code: "FM", continent: "Oceania"}, {name: "Moldova", code: "MD", continent: "Europe"}, {name: "Monaco", code: "MC", continent: "Europe"},
    {name: "Mongolia", code: "MN", continent: "Asia"}, {name: "Montenegro", code: "ME", continent: "Europe"}, {name: "Morocco", code: "MA", continent: "Africa"},
    {name: "Mozambique", code: "MZ", continent: "Africa"}, {name: "Myanmar", code: "MM", continent: "Asia"}, {name: "Namibia", code: "NA", continent: "Africa"},
    {name: "Nauru", code: "NR", continent: "Oceania"}, {name: "Nepal", code: "NP", continent: "Asia"}, {name: "Netherlands", code: "NL", continent: "Europe"},
    {name: "New Zealand", code: "NZ", continent: "Oceania"}, {name: "Nicaragua", code: "NI", continent: "Americas"}, {name: "Niger", code: "NE", continent: "Africa"},
    {name: "Nigeria", code: "NG", continent: "Africa"}, {name: "North Macedonia", code: "MK", continent: "Europe"}, {name: "Norway", code: "NO", continent: "Europe"},
    {name: "Oman", code: "OM", continent: "Asia"}, {name: "Pakistan", code: "PK", continent: "Asia"}, {name: "Palau", code: "PW", continent: "Oceania"},
    {name: "Palestine", code: "PS", continent: "Asia"}, {name: "Panama", code: "PA", continent: "Americas"}, {name: "Papua New Guinea", code: "PG", continent: "Oceania"},
    {name: "Paraguay", code: "PY", continent: "Americas"}, {name: "Peru", code: "PE", continent: "Americas"}, {name: "Philippines", code: "PH", continent: "Asia"},
    {name: "Poland", code: "PL", continent: "Europe"}, {name: "Portugal", code: "PT", continent: "Europe"}, {name: "Qatar", code: "QA", continent: "Asia"},
    {name: "Romania", code: "RO", continent: "Europe"}, {name: "Russia", code: "RU", continent: "Europe"}, {name: "Rwanda", code: "RW", continent: "Africa"},
    {name: "Saint Kitts and Nevis", code: "KN", continent: "Americas"}, {name: "Saint Lucia", code: "LC", continent: "Americas"},
    {name: "Saint Vincent and the Grenadines", code: "VC", continent: "Americas"}, {name: "Samoa", code: "WS", continent: "Oceania"},
    {name: "San Marino", code: "SM", continent: "Europe"}, {name: "Sao Tome and Principe", code: "ST", continent: "Africa"},
    {name: "Saudi Arabia", code: "SA", continent: "Asia"}, {name: "Senegal", code: "SN", continent: "Africa"}, {name: "Serbia", code: "RS", continent: "Europe"},
    {name: "Seychelles", code: "SC", continent: "Africa"}, {name: "Sierra Leone", code: "SL", continent: "Africa"}, {name: "Singapore", code: "SG", continent: "Asia"},
    {name: "Slovakia", code: "SK", continent: "Europe"}, {name: "Slovenia", code: "SI", continent: "Europe"}, {name: "Solomon Islands", code: "SB", continent: "Oceania"},
    {name: "Somalia", code: "SO", continent: "Africa"}, {name: "South Africa", code: "ZA", continent: "Africa"}, {name: "South Sudan", code: "SS", continent: "Africa"},
    {name: "Spain", code: "ES", continent: "Europe"}, {name: "Sri Lanka", code: "LK", continent: "Asia"}, {name: "Sudan", code: "SD", continent: "Africa"},
    {name: "Suriname", code: "SR", continent: "Americas"}, {name: "Sweden", code: "SE", continent: "Europe"}, {name: "Switzerland", code: "CH", continent: "Europe"},
    {name: "Syria", code: "SY", continent: "Asia"}, {name: "Taiwan", code: "TW", continent: "Asia"}, {name: "Tajikistan", code: "TJ", continent: "Asia"},
    {name: "Tanzania", code: "TZ", continent: "Africa"}, {name: "Thailand", code: "TH", continent: "Asia"}, {name: "Timor-Leste", code: "TL", continent: "Asia"},
    {name: "Togo", code: "TG", continent: "Africa"}, {name: "Tonga", code: "TO", continent: "Oceania"}, {name: "Trinidad and Tobago", code: "TT", continent: "Americas"},
    {name: "Tunisia", code: "TN", continent: "Africa"}, {name: "Türkiye", code: "TR", continent: "Asia"}, {name: "Turkmenistan", code: "TM", continent: "Asia"},
    {name: "Tuvalu", code: "TV", continent: "Oceania"}, {name: "Uganda", code: "UG", continent: "Africa"}, {name: "Ukraine", code: "UA", continent: "Europe"},
    {name: "United Arab Emirates", code: "AE", continent: "Asia"}, {name: "United Kingdom", code: "GB", continent: "Europe"},
    {name: "United States", code: "US", continent: "Americas"}, {name: "Uruguay", code: "UY", continent: "Americas"}, {name: "Uzbekistan", code: "UZ", continent: "Asia"},
    {name: "Vanuatu", code: "VU", continent: "Oceania"}, {name: "Vatican City", code: "VA", continent: "Europe"}, {name: "Venezuela", code: "VE", continent: "Americas"},
    {name: "Vietnam", code: "VN", continent: "Asia"}, {name: "Yemen", code: "YE", continent: "Asia"}, {name: "Zambia", code: "ZM", continent: "Africa"},
    {name: "Zimbabwe", code: "ZW", continent: "Africa"}
];

const byCode = Object.fromEntries(countriesFull.map(c => [c.code, c]));
const byName = Object.fromEntries(countriesFull.map(c => [c.name.toLowerCase(), c]));
const CONTINENT_EMOJI = { Africa: '🌍', Americas: '🌎', Asia: '🌏', Europe: '🏰', Oceania: '🌊', Other: '🌐' };

// --- STATE ---
// Reviews are shared by the whole group and live on the server (api/reviews.js).
// If the server storage isn't connected yet we fall back to this browser's localStorage.
let diary = [];
let cloudConnected = false;
let picks = JSON.parse(localStorage.getItem("spunCountries") || "[]");   // shared via api/picks.js when online
let available = [];          // countries nobody has reviewed and this device hasn't picked yet
let editingId = null;
let picking = false;
let currentPick = null;

const $ = id => document.getElementById(id);

// --- HELPERS ---
const flagUrl = (code, size = 'w80') => `https://flagcdn.com/${size}/${code.toLowerCase()}.png`;

function findCountry(nameOrCode) {
    if (!nameOrCode) return null;
    return byCode[nameOrCode] || byName[String(nameOrCode).trim().toLowerCase()] || null;
}

function escapeHtml(str) {
    return String(str ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

function todayISO() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

// Dates are stored as YYYY-MM-DD; older entries may still hold a locale string.
function parseDate(value) {
    if (ISO_DATE.test(value || '')) {
        const [y, m, d] = value.split('-').map(Number);
        return new Date(y, m - 1, d);
    }
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? new Date(0) : parsed;
}

function formatDate(value) {
    const d = parseDate(value);
    if (d.getTime() === 0) return value || '';
    return d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
}

const grade = score => score >= 8 ? 'good' : score >= 5 ? 'ok' : 'bad';

let toastTimer = null;
function showToast(message, isError = false) {
    const el = $('toast');
    el.textContent = message;
    el.classList.toggle('error', isError);
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

function setSyncStatus() {
    const el = $('sync-status');
    if (cloudConnected) {
        el.innerHTML = '<span class="sync-long">Shared with the group</span><span class="sync-short">Shared</span>';
        el.className = 'sync-status online';
        el.title = 'Reviews are saved online and visible to everyone.';
    } else {
        el.innerHTML = '<span class="sync-long">This device only</span><span class="sync-short">Local</span>';
        el.className = 'sync-status offline';
        el.title = 'Shared storage is not connected, so reviews only live in this browser.';
    }
}

// --- DATA LAYER ---
async function api(method, path = '', body) {
    const res = await fetch(`/api/reviews${path}`, {
        method,
        headers: body ? { 'Content-Type': 'application/json' } : undefined,
        body: body ? JSON.stringify(body) : undefined
    });
    if (!res.ok) {
        let message = `Request failed (${res.status})`;
        try { message = (await res.json()).error || message; } catch (_) { /* ignore */ }
        throw new Error(message);
    }
    return res.status === 204 ? null : res.json();
}

async function picksApi(method, query = '', body) {
    const res = await fetch(`/api/picks${query}`, {
        method,
        headers: body ? { 'Content-Type': 'application/json' } : undefined,
        body: body ? JSON.stringify(body) : undefined
    });
    if (!res.ok) throw new Error(`Picks request failed (${res.status})`);
    return res.json();
}

function savePicks(list) {
    picks = list;
    if (!cloudConnected) localStorage.setItem("spunCountries", JSON.stringify(picks));
}

async function addPick(name) {
    if (picks.includes(name)) return;
    if (cloudConnected) {
        try { return savePicks(await picksApi('POST', '', { country: name })); } catch (_) { /* fall through */ }
    }
    savePicks([...picks, name]);
}

async function removePick(name) {
    if (!picks.includes(name)) return;
    if (cloudConnected) {
        try { return savePicks(await picksApi('DELETE', `?country=${encodeURIComponent(name)}`)); } catch (_) { /* fall through */ }
    }
    savePicks(picks.filter(p => p !== name));
}

async function clearPicks() {
    if (cloudConnected) {
        try { await picksApi('DELETE'); } catch (_) { /* fall through */ }
    }
    localStorage.removeItem("spunCountries");
    picks = [];
}

function loadLocalDiary() {
    const local = JSON.parse(localStorage.getItem('foodDiary') || "[]");
    local.forEach(e => { if (!e.id) e.id = `local-${Math.random().toString(36).slice(2)}`; });
    return local;
}

function saveLocalDiary() {
    localStorage.setItem('foodDiary', JSON.stringify(diary));
}

async function loadDiary() {
    try {
        const remote = await api('GET');
        cloudConnected = true;

        // Picks are shared too. Any picks this browser made while offline join the group's list.
        let remotePicks = await picksApi('GET');
        for (const name of picks.filter(p => !remotePicks.includes(p))) {
            try { remotePicks = await picksApi('POST', '', { country: name }); } catch (_) { /* keep going */ }
        }
        localStorage.removeItem("spunCountries");
        picks = remotePicks;

        // First time online: push anything this browser had saved locally, then stop using local storage.
        const local = loadLocalDiary();
        if (local.length > 0) {
            for (const entry of local) {
                const { id, ...rest } = entry;
                try { remote.push(await api('POST', '', rest)); } catch (_) { /* keep going */ }
            }
            localStorage.removeItem('foodDiary');
            showToast(`Uploaded ${local.length} local review${local.length === 1 ? '' : 's'} to the group`);
        }
        diary = remote;
    } catch (err) {
        cloudConnected = false;
        diary = loadLocalDiary();
    }
    setSyncStatus();
    refreshDerived();
}

async function refreshFromCloud() {
    if (!cloudConnected) return;
    try {
        [diary, picks] = await Promise.all([api('GET'), picksApi('GET')]);
        refreshDerived();
    } catch (_) { /* keep showing what we have */ }
}

async function saveEntry(entry) {
    if (cloudConnected) {
        if (entry.id) {
            const updated = await api('PUT', '', entry);
            diary = diary.map(e => e.id === updated.id ? updated : e);
        } else {
            diary.unshift(await api('POST', '', entry));
        }
    } else {
        if (entry.id) {
            diary = diary.map(e => e.id === entry.id ? { ...e, ...entry } : e);
        } else {
            diary.unshift({ ...entry, id: `local-${Date.now()}`, createdAt: new Date().toISOString() });
        }
        saveLocalDiary();
    }
    refreshDerived();
}

async function deleteEntry(id) {
    if (cloudConnected) await api('DELETE', `?id=${encodeURIComponent(id)}`);
    diary = diary.filter(e => e.id !== id);
    if (!cloudConnected) saveLocalDiary();
    refreshDerived();
}

function exploredCodes() {
    const set = new Set();
    diary.forEach(e => { const c = findCountry(e.country); if (c) set.add(c.code); });
    return set;
}

// Recompute everything that depends on the diary: available pool, progress bar and map colours.
function refreshDerived() {
    const explored = exploredCodes();
    available = countriesFull.filter(c => !explored.has(c.code) && !picks.includes(c.name));
    updateProgressBar(explored.size);
    paintMaps(explored);
    renderUpNext(explored);
}

// --- UP NEXT (picked, not yet reviewed) ---
function renderUpNext(explored = exploredCodes()) {
    const wrap = $('up-next');
    const list = $('up-next-list');
    const queue = picks.map(findCountry).filter(c => c && !explored.has(c.code));
    if (queue.length === 0) { wrap.classList.add('hidden'); list.innerHTML = ''; return; }
    wrap.classList.remove('hidden');
    list.innerHTML = queue.map(c => `
        <div class="up-next-card" data-code="${c.code}">
            <button class="up-next-main" type="button" onclick="focusPick('${c.code}')" aria-label="Show ${escapeHtml(c.name)} on the map">
                <img class="flag" src="${flagUrl(c.code)}" alt="" loading="lazy">
                <span class="up-next-text">
                    <span class="up-next-name">${escapeHtml(c.name)}</span>
                    <span class="up-next-meta">${CONTINENT_EMOJI[c.continent] || ''} ${c.continent}</span>
                </span>
            </button>
            <div class="up-next-actions">
                <button class="chip-btn" type="button" onclick="reviewPick('${c.code}')">Review</button>
                <button class="chip-btn danger" type="button" onclick="unpick('${c.code}')">Unpick</button>
            </div>
        </div>`).join('');
}

window.focusPick = async function (code) {
    const country = byCode[code];
    if (!country || picking) return;
    currentPick = country;
    refreshDerived();
    await exploreMap.zoomTo(code, 1000);
    showResult(country);
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.reviewPick = function (code) {
    const country = byCode[code];
    if (!country) return;
    resetForm();
    $('log-country').value = country.name;
    switchTab('review');
};

window.unpick = async function (code) {
    const country = byCode[code];
    if (!country) return;
    await removePick(country.name);
    if (currentPick && currentPick.code === code) {
        currentPick = null;
        $('result-card').classList.add('hidden');
        $('explore-actions').classList.remove('hidden');
        $('btn-reset-view').classList.add('hidden');
        exploreMap.resetZoom(700);
    }
    refreshDerived();
    showToast(`${country.name} is back in the pool`);
};

// --- MAPS ---
const tooltip = $('map-tooltip');

function positionTooltip(event) {
    const x = Math.min(Math.max(event.clientX, 130), window.innerWidth - 130);
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${event.clientY}px`;
}

function hideTooltip() { tooltip.classList.add('hidden'); }

function exploreTooltip(code, event) {
    const country = code && byCode[code];
    if (!country || picking) return hideTooltip();
    const explored = exploredCodes();
    const state = explored.has(code) ? 'Explored' : picks.includes(country.name) ? 'Picked · waiting for a review' : 'Up for grabs';
    tooltip.innerHTML = `<div class="map-tooltip-name">${escapeHtml(country.name)}</div><div class="map-tooltip-sub">${state}</div>`;
    tooltip.classList.remove('hidden');
    positionTooltip(event);
}

function statsTooltip(code, event) {
    const country = code && byCode[code];
    if (!country) return hideTooltip();
    const entries = diary.filter(e => findCountry(e.country)?.code === code);
    let html = `<div class="map-tooltip-name">${escapeHtml(country.name)}</div>`;
    if (entries.length === 0) {
        html += `<div class="map-tooltip-sub">Not visited yet</div>`;
    } else {
        html += entries.map(e => `
            <div class="map-tooltip-entry">
                <span><b>${escapeHtml(e.restaurant)}</b><br><span class="map-tooltip-sub">${formatDate(e.date)}</span></span>
                ${e.unrated ? '<span class="score-pill muted">Unrated</span>' : `<span class="score-pill ${grade(e.overall)}">${(e.overall ?? 0).toFixed(1)}</span>`}
            </div>`).join('');
    }
    tooltip.innerHTML = html;
    tooltip.classList.remove('hidden');
    positionTooltip(event);
}

const exploreMap = new WorldMap($('explore-map'), {
    onHover: exploreTooltip,
    onSelect: code => {
        // Tapping a country picks it directly, as long as it's still in the pool.
        if (picking || !byCode[code]) return;
        if (!available.some(c => c.code === code)) {
            const country = byCode[code];
            showToast(exploredCodes().has(code) ? `${country.name} is already explored` : `${country.name} is already picked`);
            return;
        }
        choose(code, { animate: false });
    }
});

const statsMap = new WorldMap($('stats-map'), { onHover: statsTooltip });

function paintMaps(explored = exploredCodes()) {
    const states = {};
    countriesFull.forEach(c => {
        if (explored.has(c.code)) states[c.code] = 'explored';
        else if (picks.includes(c.name)) states[c.code] = 'spun';
    });
    if (currentPick && !picking) states[currentPick.code] = 'selected';
    exploreMap.setBaseStates(states);

    const statStates = {};
    explored.forEach(code => statStates[code] = 'explored');
    statsMap.setBaseStates(statStates);
}

// --- EXPLORE FLOW ---
function updateProgressBar(completed) {
    const total = countriesFull.length;
    $('progress-percent').textContent = `${completed} / ${total}`;
    $('progress-fill').style.width = `${(completed / total) * 100}%`;
}

async function pickRandom() {
    if (picking) return;
    if (available.length === 0) return showToast('Every country has been picked or explored!');
    const winner = available[Math.floor(Math.random() * available.length)];
    await choose(winner.code, { animate: true });
}

async function choose(code, { animate }) {
    const country = byCode[code];
    picking = true;
    hideTooltip();
    $('btn-pick').disabled = true;
    $('result-card').classList.add('hidden');
    $('btn-reset-view').classList.add('hidden');

    if (exploreMap.isZoomed()) await exploreMap.resetZoom(500);

    if (animate) {
        // The roll: countries light up across the map, slowing down until it lands on the winner.
        const pool = available.map(c => c.code);
        await exploreMap.roll(pool, code, { duration: 3200 });
        await new Promise(r => setTimeout(r, 250));
    } else {
        exploreMap.setState(code, 'selected');
    }

    // Record the pick for the whole group so the country leaves the pool until it's reviewed.
    await addPick(country.name);
    currentPick = country;

    await exploreMap.zoomTo(code, 1300);
    picking = false;
    refreshDerived();
    showResult(country);
}

// --- RESTAURANT SUGGESTIONS ---
const placesCache = {};
let placesRequest = 0;

async function loadRestaurants(country) {
    const box = $('result-places');
    const requestId = ++placesRequest;
    const render = data => { if (requestId === placesRequest) box.innerHTML = renderPlaces(country, data); };

    if (placesCache[country.name]) return render(placesCache[country.name]);

    box.innerHTML = `
        <div class="places-head"><span class="eyebrow">Where to eat it in London</span></div>
        <div class="places-loading"><span class="spinner"></span> Looking for ${escapeHtml(country.name)} spots…</div>`;
    try {
        const res = await fetch(`/api/restaurants?country=${encodeURIComponent(country.name)}`);
        const data = await res.json();
        if (!res.ok && !data.searchUrl) throw new Error(data.error || 'Lookup failed');
        if (res.ok) placesCache[country.name] = data;
        render(data);
    } catch (err) {
        render({ error: true, searchUrl: `https://www.google.com/maps/search/${encodeURIComponent(country.name + ' restaurant London')}` });
    }
}

function renderPlaces(country, data) {
    const results = data.results || [];
    const head = `<div class="places-head">
        <span class="eyebrow">Where to eat it in London</span>
        <a class="places-more" href="${data.searchUrl}" target="_blank" rel="noopener">Search Google Maps ↗</a>
    </div>`;

    if (data.error) {
        return head + `<p class="places-empty">Couldn't reach the restaurant directory just now — try the Google Maps search instead.</p>`;
    }
    if (results.length === 0) {
        return head + `<p class="places-empty">Nothing tagged as ${escapeHtml(data.terms?.[0] || country.name)} in London's map data yet — Google Maps is your best bet.</p>`;
    }
    return head + `<div class="places-list">${results.map(p => `
        <div class="place">
            <div class="place-main">
                <div class="place-name">${escapeHtml(p.name)}</div>
                <div class="place-meta">${[p.type, ...p.cuisine.slice(0, 3)].filter(Boolean).map(escapeHtml).join(' · ')}</div>
                ${p.address ? `<div class="place-address">${escapeHtml(p.address)}</div>` : ''}
            </div>
            <div class="place-actions">
                <a class="chip-btn" href="${p.mapsUrl}" target="_blank" rel="noopener">Maps</a>
                ${p.website ? `<a class="chip-btn" href="${escapeHtml(p.website)}" target="_blank" rel="noopener">Site</a>` : ''}
                <button class="chip-btn accent" type="button" onclick="reviewAt('${country.code}', ${JSON.stringify(p.name).replace(/"/g, '&quot;')})">Review here</button>
            </div>
        </div>`).join('')}</div>
        <p class="places-source">Listings from OpenStreetMap · ${results.length} shown</p>`;
}

window.reviewAt = function (code, restaurant) {
    const country = byCode[code];
    if (!country) return;
    resetForm();
    $('log-country').value = country.name;
    $('log-restaurant').value = restaurant;
    switchTab('review');
};

function showResult(country) {
    $('result-flag').src = flagUrl(country.code, 'w160');
    $('result-flag').alt = `Flag of ${country.name}`;
    $('result-name').textContent = country.name;
    const explored = exploredCodes().size;
    $('result-meta').textContent = `${CONTINENT_EMOJI[country.continent] || ''} ${country.continent} · ${explored} of ${countriesFull.length} explored so far`;
    $('result-card').classList.remove('hidden');
    $('explore-actions').classList.add('hidden');
    $('btn-reset-view').classList.remove('hidden');
    $('btn-pick').disabled = false;
    $('log-country').value = country.name;
    loadRestaurants(country);
}

async function clearPick() {
    currentPick = null;
    $('result-card').classList.add('hidden');
    $('explore-actions').classList.remove('hidden');
    $('btn-reset-view').classList.add('hidden');
    refreshDerived();
    await exploreMap.resetZoom(900);
}

$('btn-pick').onclick = pickRandom;
$('btn-again').onclick = async () => {
    currentPick = null;
    $('result-card').classList.add('hidden');
    $('btn-reset-view').classList.add('hidden');
    refreshDerived();
    pickRandom();
};
$('btn-reset-view').onclick = clearPick;
$('btn-review-now').onclick = () => switchTab('review');

// Clears the group's picked-but-unreviewed list — reviews are never touched here.
$('btn-reset').onclick = async () => {
    if (picks.length === 0) return showToast('No picked countries to return');
    const scope = cloudConnected ? ' for everyone' : '';
    if (confirm(`Return all ${picks.length} picked countr${picks.length === 1 ? 'y' : 'ies'} to the pool${scope}?`)) {
        await clearPicks();
        currentPick = null;
        $('result-card').classList.add('hidden');
        $('explore-actions').classList.remove('hidden');
        $('btn-reset-view').classList.add('hidden');
        refreshDerived();
        exploreMap.resetZoom(700);
        showToast('Pool reset');
    }
};

// --- TABS ---
const tabs = {
    explore: { btn: $('tab-explore'), sec: $('explore-section') },
    review: { btn: $('tab-review'), sec: $('review-section') },
    logs: { btn: $('tab-logs'), sec: $('logs-section') },
    rankings: { btn: $('tab-rankings'), sec: $('rankings-section') },
    stats: { btn: $('tab-stats'), sec: $('stats-section') }
};

let activeTab = 'explore';
let currentDiarySort = 'recent';
let currentRankCategory = 'overall';

function showSection(k) {
    activeTab = k;
    Object.keys(tabs).forEach(x => {
        tabs[x].btn.classList.toggle('active', x === k);
        tabs[x].btn.setAttribute('aria-selected', String(x === k));
        tabs[x].sec.classList.toggle('hidden', x !== k);
    });
    hideTooltip();
}

function renderActiveTab() {
    if (activeTab === 'logs') renderDiary(currentDiarySort);
    if (activeTab === 'rankings') updateRank(currentRankCategory);
    if (activeTab === 'stats') updateStats();
}

async function switchTab(k) {
    showSection(k);
    if (k !== 'review' && editingId) resetForm();
    renderActiveTab();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Pick up reviews friends added since the page loaded.
    if (k === 'logs' || k === 'rankings' || k === 'stats') {
        await refreshFromCloud();
        renderActiveTab();
    }
}
Object.keys(tabs).forEach(k => tabs[k].btn.onclick = () => switchTab(k));

// --- REVIEW FORM ---
function paintSlider(input) {
    const pct = ((input.value - input.min) / (input.max - input.min)) * 100;
    input.style.setProperty('--fill', `${pct}%`);
}

function updateAvg() {
    const f = parseFloat($('rate-food').value);
    const s = parseFloat($('rate-service').value);
    const v = parseFloat($('rate-vibe').value);

    $('val-food').textContent = f.toFixed(1);
    $('val-service').textContent = s.toFixed(1);
    $('val-vibe').textContent = v.toFixed(1);
    document.querySelectorAll('input[type="range"]').forEach(paintSlider);

    // Weighted score: food matters most.
    const avg = parseFloat((f * 0.6 + s * 0.3 + v * 0.1).toFixed(1));
    $('overall-score').textContent = avg.toFixed(1);
    $('overall-box').className = `overall ${grade(avg)}`;
}
document.querySelectorAll('input[type="range"]').forEach(i => i.oninput = updateAvg);

function setupDatalist() {
    const dl = $('country-options');
    countriesFull.forEach(c => { const o = document.createElement('option'); o.value = c.name; dl.appendChild(o); });
}

function resetForm() {
    editingId = null;
    $('log-country').value = '';
    $('log-date').value = todayISO();
    $('log-restaurant').value = '';
    $('log-notes').value = '';
    ['rate-food', 'rate-service', 'rate-vibe'].forEach(id => $(id).value = 5);
    updateAvg();
    $('form-title').textContent = 'Add a review';
    $('btn-save-log').textContent = 'Save review';
    $('btn-cancel-edit').classList.add('hidden');
}

window.startEdit = function (id) {
    const entry = diary.find(e => e.id === id);
    if (!entry) return;
    editingId = id;
    $('log-country').value = entry.country;
    $('log-date').value = ISO_DATE.test(entry.date || '') ? entry.date : todayISO();
    $('log-restaurant').value = entry.restaurant === 'Unnamed' ? '' : entry.restaurant;
    $('log-notes').value = entry.notes || '';
    $('rate-food').value = entry.food;
    $('rate-service').value = entry.service;
    $('rate-vibe').value = entry.vibe;
    updateAvg();
    $('form-title').textContent = `Editing ${entry.country}`;
    $('btn-save-log').textContent = 'Update review';
    $('btn-cancel-edit').classList.remove('hidden');
    showSection('review');
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.confirmDelete = async function (id) {
    const entry = diary.find(e => e.id === id);
    if (!entry) return;
    if (!confirm(`Delete the review for ${entry.country} (${entry.restaurant})?`)) return;
    try {
        await deleteEntry(id);
        showToast('Review deleted');
        renderActiveTab();
    } catch (err) {
        showToast(`Could not delete: ${err.message}`, true);
    }
};

$('btn-cancel-edit').onclick = resetForm;

$('review-form').onsubmit = async event => {
    event.preventDefault();
    const known = findCountry($('log-country').value);
    if (!known) { $('log-country').focus(); return showToast('Pick a country from the list', true); }

    const btn = $('btn-save-log');
    const wasEditing = Boolean(editingId);
    btn.disabled = true;
    try {
        await saveEntry({
            id: editingId || undefined,
            country: known.name,
            restaurant: $('log-restaurant').value.trim() || "Unnamed",
            food: parseFloat($('rate-food').value),
            service: parseFloat($('rate-service').value),
            vibe: parseFloat($('rate-vibe').value),
            overall: parseFloat($('overall-score').textContent),
            notes: $('log-notes').value.trim(),
            date: $('log-date').value || todayISO()
        });
        await removePick(known.name);
        showToast(wasEditing ? 'Review updated' : `${known.name} explored!`);
        resetForm();
        // The picked country is now explored, so the Explore tab goes back to the world view.
        if (currentPick && currentPick.code === known.code) clearPick();
        switchTab('logs');
    } catch (err) {
        showToast(`Could not save: ${err.message}`, true);
    } finally {
        btn.disabled = false;
    }
};

// --- LOGS ---
function buildCard(item, showContinent) {
    const country = findCountry(item.country);
    const code = country ? country.code : null;
    return `
        <article class="diary-card">
            <div class="diary-top">
                <div class="diary-country">
                    ${code ? `<img class="flag" src="${flagUrl(code)}" alt="" loading="lazy">` : ''}
                    <div>
                        <div class="diary-name">${escapeHtml(item.country)}</div>
                        ${showContinent && country ? `<div class="diary-continent">${country.continent}</div>` : ''}
                    </div>
                </div>
                ${item.unrated
                    ? '<span class="score-pill muted">Unrated</span>'
                    : `<span class="score-pill ${grade(item.overall || 0)}">${(item.overall || 0).toFixed(1)}</span>`}
            </div>
            <div class="diary-where"><b>${escapeHtml(item.restaurant)}</b> · ${formatDate(item.date)}</div>
            ${item.unrated
                ? '<div class="diary-scores"><span>No scores yet — tap Edit to rate this meal</span></div>'
                : `<div class="diary-scores">
                <span title="Food">🍜 ${(item.food ?? 0).toFixed(1)}</span>
                <span title="Service">🛎️ ${(item.service ?? 0).toFixed(1)}</span>
                <span title="Vibe">✨ ${(item.vibe ?? 0).toFixed(1)}</span>
            </div>`}
            ${item.notes ? `<p class="diary-notes">“${escapeHtml(item.notes)}”</p>` : ''}
            <div class="diary-actions">
                <button class="chip-btn" type="button" onclick="startEdit('${item.id}')">Edit</button>
                <button class="chip-btn danger" type="button" onclick="confirmDelete('${item.id}')">Delete</button>
            </div>
        </article>`;
}

window.renderDiary = function (sortBy = 'recent') {
    currentDiarySort = sortBy;
    const container = $('diary-display');
    const data = [...diary];

    document.querySelectorAll('#logs-section .seg').forEach(btn => btn.classList.toggle('active', btn.id === `sort-${sortBy}`));

    if (data.length === 0) {
        container.innerHTML = '<div class="empty">No reviews yet. Pick a country and go eat!</div>';
        return;
    }

    const continentOf = item => findCountry(item.country)?.continent || 'Other';
    if (sortBy === 'alpha') {
        data.sort((a, b) => a.country.localeCompare(b.country));
    } else if (sortBy === 'continent') {
        data.sort((a, b) => continentOf(a).localeCompare(continentOf(b)) || a.country.localeCompare(b.country));
    } else {
        data.sort((a, b) => (parseDate(b.date) - parseDate(a.date)) || (b.createdAt || '').localeCompare(a.createdAt || ''));
    }

    if (sortBy === 'continent') {
        const groups = {};
        data.forEach(item => { (groups[continentOf(item)] ||= []).push(item); });
        container.innerHTML = Object.keys(groups).sort().map(cont => `
            <div class="continent-group">
                <div class="continent-group-header">
                    <span>${CONTINENT_EMOJI[cont] || '🌐'}</span>
                    <span class="continent-group-name">${cont}</span>
                    <span class="continent-group-count">${groups[cont].length} ${groups[cont].length === 1 ? 'review' : 'reviews'}</span>
                </div>
                <div class="continent-group-cards">${groups[cont].map(item => buildCard(item, false)).join('')}</div>
            </div>`).join('');
    } else {
        container.innerHTML = data.map(item => buildCard(item, true)).join('');
    }
};

// --- RANKINGS ---
window.updateRank = function (category) {
    currentRankCategory = category;
    const div = $('rankings-list');
    document.querySelectorAll('#rankings-section .seg').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${category}'`));
    });

    const rated = diary.filter(e => !e.unrated);
    if (rated.length === 0) {
        div.innerHTML = `<div class="empty">${diary.length ? 'No rated meals yet — add scores from the Logs tab.' : 'Nothing to rank yet.'}</div>`;
        return;
    }

    const sorted = rated.sort((a, b) => (b[category] ?? 0) - (a[category] ?? 0));
    div.innerHTML = `
        <div class="rank-header"><span>#</span><span></span><span>Country</span><span style="text-align:right">${category}</span></div>
        ${sorted.map((item, i) => {
            const country = findCountry(item.country);
            const score = item[category] ?? 0;
            return `
                <div class="rank-row ${i < 3 ? `medal-${i + 1}` : ''}">
                    <span class="rank-pos">${i + 1}</span>
                    ${country ? `<img class="flag" src="${flagUrl(country.code)}" alt="" loading="lazy">` : '<span></span>'}
                    <div class="rank-main">
                        <div class="rank-country">${escapeHtml(item.country)}</div>
                        <div class="rank-restaurant">${escapeHtml(item.restaurant)}</div>
                    </div>
                    <span class="rank-score ${grade(score)}">${score.toFixed(1)}</span>
                </div>`;
        }).join('')}`;
};

// --- STATS ---
function updateStats() {
    const container = $('continent-averages');
    $('stat-meals').textContent = diary.length;

    // Averages only make sense over meals that have actually been scored.
    const rated = diary.filter(e => !e.unrated);
    if (rated.length === 0) {
        container.innerHTML = `<div class="empty" style="border:none;padding:24px">${diary.length ? 'Rate your meals from the Logs tab to unlock stats.' : 'Start logging to see continent stats.'}</div>`;
        $('stat-avg-rating').textContent = '–';
        $('stat-best-continent').textContent = '–';
        $('stat-most-visited').textContent = '–';
        return;
    }

    $('stat-avg-rating').textContent = (rated.reduce((s, e) => s + (e.overall || 0), 0) / rated.length).toFixed(1);

    const stats = {};
    rated.forEach(e => {
        const cont = findCountry(e.country)?.continent || 'Other';
        stats[cont] ||= { total: 0, count: 0 };
        stats[cont].total += e.overall || 0;
        stats[cont].count++;
    });
    const rows = Object.keys(stats).map(name => ({ name, avg: stats[name].total / stats[name].count, count: stats[name].count }))
        .sort((a, b) => b.avg - a.avg);

    $('stat-best-continent').textContent = rows[0].name;
    $('stat-most-visited').textContent = [...rows].sort((a, b) => b.count - a.count)[0].name;

    container.innerHTML = `
        <h3>Continent leaderboard</h3>
        ${rows.map(r => `
            <div class="continent-row">
                <span class="cont-name">${CONTINENT_EMOJI[r.name] || ''} ${r.name}</span>
                <div class="cont-bar"><div class="cont-bar-fill" style="width:${r.avg * 10}%"></div></div>
                <span class="cont-avg">${r.avg.toFixed(1)}<span class="cont-count">×${r.count}</span></span>
            </div>`).join('')}`;
}

// --- THEME ---
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelector('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#0f1117' : '#f5f6f8');
}
applyTheme(localStorage.getItem('theme') || 'dark');
$('theme-toggle').onclick = () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
};

// --- INIT ---
setupDatalist();
resetForm();
refreshDerived();
loadDiary();
