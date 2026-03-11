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

let spun = JSON.parse(localStorage.getItem("spunCountries") || "[]");
let countries = countriesFull.filter(c => !spun.includes(c.name));

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
let currentAngle = 0;
let spinning = false;
let vectorMap = null;

// --- HELPERS ---
function getFlagUrl(countryName) {
    const country = countriesFull.find(c => c.name.toLowerCase() === countryName.toLowerCase());
    return country ? `https://flagcdn.com/w40/${country.code.toLowerCase()}.png` : '';
}

// --- STATISTICS LOGIC ---
function updateStats() {
    const data = JSON.parse(localStorage.getItem('foodDiary') || "[]");
    const container = document.getElementById('continent-averages');
    
    if (data.length === 0) {
        container.innerHTML = "<p style='opacity:0.5; text-align:center; margin-top:20px;'>Start logging to see continent stats!</p>";
        document.getElementById('stat-avg-rating').textContent = "0.0";
        document.getElementById('stat-best-continent').textContent = "-";
        document.getElementById('stat-most-visited').textContent = "-";
        return;
    }

    const avgRating = (data.reduce((sum, item) => sum + item.overall, 0) / data.length).toFixed(1);
    document.getElementById('stat-avg-rating').textContent = avgRating;

    const continentStats = {}; 
    data.forEach(item => {
        const countryData = countriesFull.find(c => c.name === item.country);
        const cont = countryData ? countryData.continent : "Other";
        if (!continentStats[cont]) continentStats[cont] = { total: 0, count: 0 };
        continentStats[cont].total += item.overall;
        continentStats[cont].count++;
    });

    const sortedContinents = Object.keys(continentStats).map(name => ({
        name,
        avg: (continentStats[name].total / continentStats[name].count).toFixed(1),
        count: continentStats[name].count
    })).sort((a, b) => b.avg - a.avg);

    document.getElementById('stat-best-continent').textContent = sortedContinents[0].name;
    const mostVisited = [...sortedContinents].sort((a,b) => b.count - a.count)[0];
    document.getElementById('stat-most-visited').textContent = mostVisited.name;

    container.innerHTML = `
        <h3 style="margin: 25px 0 10px 0; font-size: 1rem; opacity: 0.8; text-align: center;">Continent Leaderboard</h3>
        ${sortedContinents.map(c => `
            <div class="continent-row">
                <span class="cont-name">${c.name}</span>
                <div class="cont-bar-wrapper">
                    <div class="cont-bar-fill" style="width: ${c.avg * 10}%"></div>
                </div>
                <span class="cont-avg">${c.avg} ⭐</span>
            </div>
        `).join('')}
    `;
}

// --- MAP LOGIC ---
function updateMap() {
    const data = JSON.parse(localStorage.getItem('foodDiary') || "[]");
    const visitedCodes = {};
    const myNewColor = '#27ae60';

    data.forEach(entry => {
        const country = countriesFull.find(c => c.name === entry.country);
        if (country) visitedCodes[country.code] = 1;
    });

    if (!vectorMap) {
        vectorMap = new jsVectorMap({
            selector: "#map",
            map: "world",
            regionStyle: {
                initial: { 
                    fill: '#dee2e6',
                    stroke: '#888888',
                    strokeWidth: 0.5
                },
                hover: { fillOpacity: 0.7 }
            },
            series: {
                regions: [{
                    values: visitedCodes,
                    attribute: 'fill',
                    scale: { '1': myNewColor }
                }]
            }
        });
    } else {
        vectorMap.updateSize();
        vectorMap.series.regions[0].setValues(visitedCodes);
    }
}

// --- TAB SWITCHING ---
const tabs = {
    wheel: { btn: document.getElementById('tab-wheel'), sec: document.getElementById('wheel-section') },
    diary: { btn: document.getElementById('tab-diary'), sec: document.getElementById('diary-section') },
    history: { btn: document.getElementById('tab-history'), sec: document.getElementById('history-section') },
    rankings: { btn: document.getElementById('tab-rankings'), sec: document.getElementById('rankings-section') },
    stats: { btn: document.getElementById('tab-stats'), sec: document.getElementById('stats-section') }
};

function switchTab(k) {
    Object.keys(tabs).forEach(x => {
        tabs[x].btn.classList.toggle('active', x === k);
        tabs[x].sec.classList.toggle('hidden', x !== k);
    });
    if (k === 'wheel') drawWheel();
    if (k === 'history') renderDiary();
    if (k === 'rankings') window.updateRank('overall');
    if (k === 'stats') {
        updateStats();
        setTimeout(updateMap, 50);
    }
}
Object.keys(tabs).forEach(k => tabs[k].btn.onclick = () => switchTab(k));

// --- WHEEL & PROGRESS LOGIC ---
function updateProgressBar() {
    const diary = JSON.parse(localStorage.getItem('foodDiary') || "[]");
    const uniqueCountriesEaten = new Set(diary.map(entry => entry.country));
    const total = 195;
    const completed = uniqueCountriesEaten.size;
    const percentage = (completed / total) * 100;
    
    const percentEl = document.getElementById('progress-percent');
    const fillEl = document.getElementById('progress-fill');
    if (percentEl) percentEl.textContent = `${completed} / ${total}`;
    if (fillEl) fillEl.style.width = `${percentage}%`;
}

function drawWheel() {
    if (canvas.offsetWidth > 0) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetWidth;
    }
    const cx = canvas.width / 2, cy = canvas.height / 2, r = canvas.width / 2 - 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (countries.length === 0) {
        ctx.font = "bold 20px Arial"; ctx.fillStyle = "#ff6b6b"; ctx.textAlign = "center";
        ctx.fillText("All countries spun!", cx, cy); return;
    }

    const arc = (2 * Math.PI) / countries.length;
    countries.forEach((c, i) => {
        const start = currentAngle + i * arc;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r, start, start + arc);
        ctx.fillStyle = `hsl(${i * (360 / countries.length)}, 70%, 60%)`; ctx.fill(); 
        ctx.strokeStyle = "rgba(255,255,255,0.1)"; ctx.stroke();
        ctx.save(); ctx.translate(cx, cy); ctx.rotate(start + arc / 2);
        ctx.fillStyle = "white"; ctx.font = countries.length > 50 ? "8px Arial" : "bold 10px Arial";
        ctx.textAlign = "right"; ctx.fillText(c.code, r - 11, 4); ctx.restore();
    });
}

function spin() {
    if (spinning || countries.length === 0) return;
    spinning = true;
    const duration = 4000, start = performance.now();
    const target = Math.PI * 10 + Math.random() * Math.PI * 2;
    document.getElementById('btn-spin').style.opacity = '0.7';

    function animate(time) {
        let elapsed = time - start, progress = Math.min(elapsed / duration, 1);
        let ease = 1 - Math.pow(1 - progress, 3);
        currentAngle = target * ease;
        drawWheel();
        if (progress < 1) requestAnimationFrame(animate); else finishSpin();
    }
    requestAnimationFrame(animate);
}

function finishSpin() {
    spinning = false;
    const arc = (2 * Math.PI) / countries.length;
    let norm = ((3 * Math.PI / 2) - (currentAngle % (2 * Math.PI)) + (2 * Math.PI)) % (2 * Math.PI);
    const winner = countries[Math.floor(norm / arc) % countries.length];
    document.getElementById('btn-spin').style.opacity = '1';
    
    const popup = document.getElementById("popup");
    const flagImg = document.getElementById("popupFlag");
    document.getElementById("popupCountry").textContent = winner.name;
    flagImg.src = `https://flagcdn.com/w320/${winner.code.toLowerCase()}.png`;
    document.getElementById('log-country').value = winner.name;

    flagImg.onload = () => {
        popup.classList.remove("hidden");
        setTimeout(() => popup.classList.add("show"), 10);
    };

    spun.push(winner.name);
    localStorage.setItem("spunCountries", JSON.stringify(spun));
    countries = countriesFull.filter(c => !spun.includes(c.name));
}

// --- FORM LOGIC ---
function updateAvg() {
    const f = parseFloat(document.getElementById('rate-food').value);
    const s = parseFloat(document.getElementById('rate-service').value);
    const v = parseFloat(document.getElementById('rate-vibe').value);
    
    // Update labels next to sliders
    document.getElementById('val-food').textContent = f.toFixed(1);
    document.getElementById('val-service').textContent = s.toFixed(1);
    document.getElementById('val-vibe').textContent = v.toFixed(1);

    // Your weighted math (0.6, 0.3, 0.1)
    const avg = (f * 0.6 + s * 0.3 + v * 0.1).toFixed(1);
    
    const scoreEl = document.getElementById('overall-score');
    const boxEl = document.getElementById('overall-box'); 
    
    scoreEl.textContent = avg;

    // Traffic Light System
    if (avg >= 8.0) {
        boxEl.style.backgroundColor = "#27ae60"; // Solid Green
        boxEl.style.color = "white";
    } else if (avg >= 5.0) {
        boxEl.style.backgroundColor = "#e67e22"; // Solid Orange
        boxEl.style.color = "white";
    } else {
        boxEl.style.backgroundColor = "#e74c3c"; // Solid Red
        boxEl.style.color = "white";
    }
}

// Ensure the sliders trigger the update
document.querySelectorAll('input[type="range"]').forEach(i => i.oninput = updateAvg);
// Call once on load to set initial state
updateAvg();

function setupDL() {
    const dl = document.getElementById('country-options');
    countriesFull.forEach(c => { let o = document.createElement('option'); o.value = c.name; dl.appendChild(o); });
}

document.getElementById('btn-save-log').onclick = () => {
    const country = document.getElementById('log-country').value;
    if (!country) return alert("Select a country!");
    
    const diary = JSON.parse(localStorage.getItem('foodDiary') || "[]");
    diary.unshift({
        country, 
        restaurant: document.getElementById('log-restaurant').value || "Unnamed",
        food: parseFloat(document.getElementById('rate-food').value),
        service: parseFloat(document.getElementById('rate-service').value),
        vibe: parseFloat(document.getElementById('rate-vibe').value),
        overall: parseFloat(document.getElementById('overall-score').textContent),
        notes: document.getElementById('log-notes').value,
        date: new Date().toLocaleDateString()
    });
    localStorage.setItem('foodDiary', JSON.stringify(diary));
    updateProgressBar();
    alert("Saved!"); 
    switchTab('history');
};

function renderDiary() {
    const div = document.getElementById('diary-display');
    const data = JSON.parse(localStorage.getItem('foodDiary') || "[]");
    
    if (data.length === 0) {
        div.innerHTML = '<p style="text-align:center; width:100%;">No logs found yet!</p>';
        return;
    }

    div.innerHTML = data.map(item => {
        const flagUrl = getFlagUrl(item.country);
        
        // Use the same traffic light logic for the Logs
        let scoreColor = "#e74c3c"; 
        if (item.overall >= 8.0) scoreColor = "#27ae60";
        else if (item.overall >= 5.0) scoreColor = "#e67e22";

        return `
            <div class="diary-card">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                    <img src="${flagUrl}" alt="" style="width: 30px; border-radius: 4px; border: 1px solid rgba(0,0,0,0.1);">
                    <b style="font-size: 1.1rem;">${item.country}</b>
                </div>
                <small>${item.restaurant} — ${item.date}</small>
                <div style="font-size:1.4rem; font-weight:900; color: ${scoreColor}; margin: 5px 0;">
                    ${item.overall.toFixed(1)} <span style="font-size: 0.9rem; opacity: 0.5;">/ 10</span>
                </div>
                <p style="margin: 0; opacity: 0.8; font-size: 0.9rem;">${item.notes}</p>
            </div>
        `;
    }).join('');
}
window.updateRank = function(category) {
    const data = JSON.parse(localStorage.getItem('foodDiary') || "[]");
    
    // Safety check: ensure we are sorting by the correct category field
    const sorted = [...data].sort((a, b) => b[category] - a[category]);
    const div = document.getElementById('rankings-list'); 
    
    if (data.length === 0) {
        div.innerHTML = '<p style="text-align:center; opacity:0.5; margin-top:20px;">No entries to rank yet!</p>';
        return;
    }

    // Force layout
    div.style.display = "block"; 
    div.style.maxWidth = "600px";
    div.style.margin = "0 auto";

    // Update the active state of the buttons visually
    document.querySelectorAll('.rank-opt').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${category}'`));
    });

    // Leaderboard Header - Now dynamic based on category
    let html = `
        <div style="display: flex; padding: 10px 15px; opacity: 0.5; font-size: 0.75rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; align-items: center;">
            <span style="width: 40px;">Pos</span>
            <span style="flex-grow: 1; margin-left: 35px;">Country</span>
            <span style="width: 60px; text-align: right;">${category}</span>
        </div>
    `;

    html += sorted.map((item, i) => {
        const flagUrl = getFlagUrl(item.country);
        const isTop3 = i < 3;
        const medalColor = i === 0 ? '#f1c40f' : i === 1 ? '#95a5a6' : i === 2 ? '#cd7f32' : 'transparent';
        
        // Traffic Light Logic
        const score = item[category];
        let scoreColor = "#e74c3c"; // Red
        if (score >= 8.0) scoreColor = "#27ae60";      // Green
        else if (score >= 5.0) scoreColor = "#e67e22"; // Orange
        
        return `
            <div class="diary-card" style="display: flex; align-items: center; gap: 15px; padding: 15px; margin-bottom: 10px; border-left: 4px solid ${medalColor}; width: 100%; box-sizing: border-box;">
                <span style="width: 25px; font-weight: 800; font-family: 'Courier New', monospace; font-size: 1.2rem; color: ${isTop3 ? medalColor : 'inherit'};">
                    ${i + 1}
                </span>
                <img src="${flagUrl}" style="width: 30px; height: auto; border-radius: 3px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                <div style="flex-grow: 1; overflow: hidden;">
                    <div style="font-weight: 700; font-size: 1rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.country}</div>
                    <div style="opacity: 0.5; font-size: 0.8rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.restaurant}</div>
                </div>
                <div style="width: 60px; text-align: right; font-weight: 900; color: ${scoreColor}; font-size: 1.2rem;">
                    ${score.toFixed(1)}
                </div>
            </div>
        `;
    }).join('');

    div.innerHTML = html;
};

// --- INIT ---
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'dark'; 

document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.checked = (savedTheme === 'dark');

themeToggle.onchange = () => {
    const theme = themeToggle.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (vectorMap) updateMap();
    drawWheel(); 
};

document.getElementById('btn-spin').onclick = spin;
document.getElementById('btn-close').onclick = () => {
    const popup = document.getElementById("popup");
    popup.classList.remove("show");
    setTimeout(() => { popup.classList.add("hidden"); drawWheel(); }, 300);
};

document.getElementById('btn-reset').onclick = () => { 
    if(confirm("Reset everything?")) { localStorage.clear(); location.reload(); }
};

setupDL(); 
updateProgressBar();
setTimeout(drawWheel, 100);
