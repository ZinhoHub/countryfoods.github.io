const countriesFull = [
    {name: "Afghanistan", code: "AF"}, {name: "Albania", code: "AL"}, {name: "Algeria", code: "DZ"},
    {name: "Andorra", code: "AD"}, {name: "Angola", code: "AO"}, {name: "Antigua and Barbuda", code: "AG"},
    {name: "Argentina", code: "AR"}, {name: "Armenia", code: "AM"}, {name: "Australia", code: "AU"},
    {name: "Austria", code: "AT"}, {name: "Azerbaijan", code: "AZ"}, {name: "Bahamas", code: "BS"},
    {name: "Bahrain", code: "BH"}, {name: "Bangladesh", code: "BD"}, {name: "Barbados", code: "BB"},
    {name: "Belarus", code: "BY"}, {name: "Belgium", code: "BE"}, {name: "Belize", code: "BZ"},
    {name: "Benin", code: "BJ"}, {name: "Bhutan", code: "BT"}, {name: "Bolivia", code: "BO"},
    {name: "Bosnia and Herzegovina", code: "BA"}, {name: "Botswana", code: "BW"}, {name: "Brazil", code: "BR"},
    {name: "Brunei", code: "BN"}, {name: "Bulgaria", code: "BG"}, {name: "Burkina Faso", code: "BF"},
    {name: "Burundi", code: "BI"}, {name: "Cabo Verde", code: "CV"}, {name: "Cambodia", code: "KH"},
    {name: "Cameroon", code: "CM"}, {name: "Canada", code: "CA"}, {name: "Central African Republic", code: "CF"},
    {name: "Chad", code: "TD"}, {name: "Chile", code: "CL"}, {name: "China", code: "CN"},
    {name: "Colombia", code: "CO"}, {name: "Comoros", code: "KM"}, {name: "Congo", code: "CG"},
    {name: "DR Congo", code: "CD"}, {name: "Costa Rica", code: "CR"}, {name: "Croatia", code: "HR"},
    {name: "Cuba", code: "CU"}, {name: "Cyprus", code: "CY"}, {name: "Czechia", code: "CZ"},
    {name: "Denmark", code: "DK"}, {name: "Djibouti", code: "DJ"}, {name: "Dominica", code: "DM"},
    {name: "Dominican Republic", code: "DO"}, {name: "Ecuador", code: "EC"}, {name: "Egypt", code: "EG"},
    {name: "El Salvador", code: "SV"}, {name: "Equatorial Guinea", code: "GQ"}, {name: "Eritrea", code: "ER"},
    {name: "Estonia", code: "EE"}, {name: "Eswatini", code: "SZ"}, {name: "Ethiopia", code: "ET"},
    {name: "Fiji", code: "FJ"}, {name: "Finland", code: "FI"}, {name: "France", code: "FR"},
    {name: "Gabon", code: "GA"}, {name: "Gambia", code: "GM"}, {name: "Georgia", code: "GE"},
    {name: "Germany", code: "DE"}, {name: "Ghana", code: "GH"}, {name: "Greece", code: "GR"},
    {name: "Grenada", code: "GD"}, {name: "Guatemala", code: "GT"}, {name: "Guinea", code: "GN"},
    {name: "Guinea-Bissau", code: "GW"}, {name: "Guyana", code: "GY"}, {name: "Haiti", code: "HT"},
    {name: "Honduras", code: "HN"}, {name: "Hungary", code: "HU"}, {name: "Iceland", code: "IS"},
    {name: "India", code: "IN"}, {name: "Indonesia", code: "ID"}, {name: "Iran", code: "IR"},
    {name: "Iraq", code: "IQ"}, {name: "Ireland", code: "IE"}, {name: "Israel", code: "IL"},
    {name: "Italy", code: "IT"}, {name: "Jamaica", code: "JM"}, {name: "Japan", code: "JP"},
    {name: "Jordan", code: "JO"}, {name: "Kazakhstan", code: "KZ"}, {name: "Kenya", code: "KE"},
    {name: "Kiribati", code: "KI"}, {name: "North Korea", code: "KP"}, {name: "South Korea", code: "KR"},
    {name: "Kuwait", code: "KW"}, {name: "Kyrgyzstan", code: "KG"}, {name: "Laos", code: "LA"},
    {name: "Latvia", code: "LV"}, {name: "Lebanon", code: "LB"}, {name: "Lesotho", code: "LS"},
    {name: "Liberia", code: "LR"}, {name: "Libya", code: "LY"}, {name: "Liechtenstein", code: "LI"},
    {name: "Lithuania", code: "LT"}, {name: "Luxembourg", code: "LU"}, {name: "Madagascar", code: "MG"},
    {name: "Malawi", code: "MW"}, {name: "Malaysia", code: "MY"}, {name: "Maldives", code: "MV"},
    {name: "Mali", code: "ML"}, {name: "Malta", code: "MT"}, {name: "Marshall Islands", code: "MH"},
    {name: "Mauritania", code: "MR"}, {name: "Mauritius", code: "MU"}, {name: "Mexico", code: "MX"},
    {name: "Micronesia", code: "FM"}, {name: "Moldova", code: "MD"}, {name: "Monaco", code: "MC"},
    {name: "Mongolia", code: "MN"}, {name: "Montenegro", code: "ME"}, {name: "Morocco", code: "MA"},
    {name: "Mozambique", code: "MZ"}, {name: "Myanmar", code: "MM"}, {name: "Namibia", code: "NA"},
    {name: "Nauru", code: "NR"}, {name: "Nepal", code: "NP"}, {name: "Netherlands", code: "NL"},
    {name: "New Zealand", code: "NZ"}, {name: "Nicaragua", code: "NI"}, {name: "Niger", code: "NE"},
    {name: "Nigeria", code: "NG"}, {name: "North Macedonia", code: "MK"}, {name: "Norway", code: "NO"},
    {name: "Oman", code: "OM"}, {name: "Pakistan", code: "PK"}, {name: "Palau", code: "PW"},
    {name: "Palestine", code: "PS"}, {name: "Panama", code: "PA"}, {name: "Papua New Guinea", code: "PG"},
    {name: "Paraguay", code: "PY"}, {name: "Peru", code: "PE"}, {name: "Philippines", code: "PH"},
    {name: "Poland", code: "PL"}, {name: "Portugal", code: "PT"}, {name: "Qatar", code: "QA"},
    {name: "Romania", code: "RO"}, {name: "Russia", code: "RU"}, {name: "Rwanda", code: "RW"},
    {name: "Saint Kitts and Nevis", code: "KN"}, {name: "Saint Lucia", code: "LC"},
    {name: "Saint Vincent and the Grenadines", code: "VC"}, {name: "Samoa", code: "WS"},
    {name: "San Marino", code: "SM"}, {name: "Sao Tome and Principe", code: "ST"},
    {name: "Saudi Arabia", code: "SA"}, {name: "Senegal", code: "SN"}, {name: "Serbia", code: "RS"},
    {name: "Seychelles", code: "SC"}, {name: "Sierra Leone", code: "SL"}, {name: "Singapore", code: "SG"},
    {name: "Slovakia", code: "SK"}, {name: "Slovenia", code: "SI"}, {name: "Solomon Islands", code: "SB"},
    {name: "Somalia", code: "SO"}, {name: "South Africa", code: "ZA"}, {name: "South Sudan", code: "SS"},
    {name: "Spain", code: "ES"}, {name: "Sri Lanka", code: "LK"}, {name: "Sudan", code: "SD"},
    {name: "Suriname", code: "SR"}, {name: "Sweden", code: "SE"}, {name: "Switzerland", code: "CH"},
    {name: "Syria", code: "SY"}, {name: "Taiwan", code: "TW"}, {name: "Tajikistan", code: "TJ"},
    {name: "Tanzania", code: "TZ"}, {name: "Thailand", code: "TH"}, {name: "Timor-Leste", code: "TL"},
    {name: "Togo", code: "TG"}, {name: "Tonga", code: "TO"}, {name: "Trinidad and Tobago", code: "TT"},
    {name: "Tunisia", code: "TN"}, {name: "Türkiye", code: "TR"}, {name: "Turkmenistan", code: "TM"},
    {name: "Tuvalu", code: "TV"}, {name: "Uganda", code: "UG"}, {name: "Ukraine", code: "UA"},
    {name: "United Arab Emirates", code: "AE"}, {name: "United Kingdom", code: "GB"},
    {name: "United States", code: "US"}, {name: "Uruguay", code: "UY"}, {name: "Uzbekistan", code: "UZ"},
    {name: "Vanuatu", code: "VU"}, {name: "Vatican City", code: "VA"}, {name: "Venezuela", code: "VE"},
    {name: "Vietnam", code: "VN"}, {name: "Yemen", code: "YE"}, {name: "Zambia", code: "ZM"},
    {name: "Zimbabwe", code: "ZW"}
];

let spun = JSON.parse(localStorage.getItem("spunCountries") || "[]");
let countries = countriesFull.filter(c => !spun.includes(c.name));

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
let currentAngle = 0;
let spinning = false;

// --- PROGRESS BAR (Based on Unique Reviews) ---
function updateProgressBar() {
    const diary = JSON.parse(localStorage.getItem('foodDiary') || "[]");
    const uniqueCountriesEaten = new Set(diary.map(entry => entry.country));
    
    const total = countriesFull.length;
    const completed = uniqueCountriesEaten.size;
    const percentage = (completed / total) * 100;
    
    const percentEl = document.getElementById('progress-percent');
    const fillEl = document.getElementById('progress-fill');
    
    if (percentEl) percentEl.textContent = `${completed} / ${total}`;
    if (fillEl) fillEl.style.width = `${percentage}%`;
}

// --- FLAG HELPER ---
function getFlagUrl(countryName) {
    const country = countriesFull.find(c => c.name.toLowerCase() === countryName.toLowerCase());
    return country ? `https://flagcdn.com/w40/${country.code.toLowerCase()}.png` : '';
}

// --- WHEEL ---
function drawWheel() {
    const cx = canvas.width / 2, cy = canvas.height / 2, r = canvas.width / 2 - 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (countries.length === 0) {
        ctx.font = "bold 20px Arial"; ctx.fillStyle = "red"; ctx.textAlign = "center";
        ctx.fillText("All countries spun!", cx, cy); return;
    }
    const arc = (2 * Math.PI) / countries.length;
    countries.forEach((c, i) => {
        const start = currentAngle + i * arc;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r, start, start + arc);
        ctx.fillStyle = `hsl(${i * (360 / countries.length)}, 70%, 60%)`; ctx.fill(); ctx.stroke();
        
        if (countries.length < 60) {
            ctx.save(); ctx.translate(cx, cy); ctx.rotate(start + arc / 2);
            ctx.fillStyle = "white"; ctx.font = "bold 10px Arial"; ctx.textAlign = "right";
            ctx.fillText(c.code, r - 15, 4); ctx.restore();
        } else {
            ctx.save(); ctx.translate(cx, cy); ctx.rotate(start + arc / 2);
            ctx.fillStyle = "white"; ctx.font = "6px Arial"; ctx.fillText(c.code, r - 17, 3);
            ctx.restore();
        }
    });
}

function spin() {
    if (spinning || countries.length === 0) return;
    spinning = true;
    const duration = 4000, start = performance.now();
    const target = Math.PI * 10 + Math.random() * Math.PI * 2;
    document.getElementById('btn-spin').style.pointerEvents = 'none';
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
    document.getElementById('btn-spin').style.pointerEvents = 'auto';
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

// --- TABS ---
const tabs = {
    wheel: { btn: document.getElementById('tab-wheel'), sec: document.getElementById('wheel-section') },
    diary: { btn: document.getElementById('tab-diary'), sec: document.getElementById('diary-section') },
    history: { btn: document.getElementById('tab-history'), sec: document.getElementById('history-section') },
    rankings: { btn: document.getElementById('tab-rankings'), sec: document.getElementById('rankings-section') }
};

function switchTab(k) {
    Object.keys(tabs).forEach(x => {
        tabs[x].btn.classList.toggle('active', x === k);
        tabs[x].sec.classList.toggle('hidden', x !== k);
    });
    if (k === 'history') renderDiary();
    if (k === 'rankings') window.updateRank('overall'); 
}
Object.keys(tabs).forEach(k => tabs[k].btn.onclick = () => switchTab(k));

// --- RATINGS ---
function updateAvg() {
    const f = parseFloat(document.getElementById('rate-food').value);
    const s = parseFloat(document.getElementById('rate-service').value);
    const v = parseFloat(document.getElementById('rate-vibe').value);
    document.getElementById('val-food').textContent = f.toFixed(1);
    document.getElementById('val-service').textContent = s.toFixed(1);
    document.getElementById('val-vibe').textContent = v.toFixed(1);
    const avg = ((f + s + v) / 3).toFixed(1);
    const scoreEl = document.getElementById('overall-score');
    const boxEl = document.getElementById('overall-box'); 
    scoreEl.textContent = avg;
    if (avg >= 8) { boxEl.style.background = "#27ae60"; boxEl.style.color = "#fff"; }
    else if (avg >= 5) { boxEl.style.background = "#f1c40f"; boxEl.style.color = "#000"; }
    else { boxEl.style.background = "#e74c3c"; boxEl.style.color = "#fff"; }
}
document.querySelectorAll('input[type="range"]').forEach(i => i.oninput = updateAvg);

function setupDL() {
    const dl = document.getElementById('country-options');
    countriesFull.forEach(c => { let o = document.createElement('option'); o.value = c.name; dl.appendChild(o); });
}

document.getElementById('btn-save-log').onclick = () => {
    const country = document.getElementById('log-country').value;
    const dateInput = document.getElementById('log-date').value; // Custom date from input
    const food = parseFloat(document.getElementById('rate-food').value);
    const service = parseFloat(document.getElementById('rate-service').value);
    const vibe = parseFloat(document.getElementById('rate-vibe').value);
    const overall = parseFloat(document.getElementById('overall-score').textContent);
    
    if (!country) return alert("Select a country!");
    
    // Fallback to today's date if the user leaves the date input empty
    const finalDate = dateInput ? new Date(dateInput).toLocaleDateString() : new Date().toLocaleDateString();

    const diary = JSON.parse(localStorage.getItem('foodDiary') || "[]");
    diary.unshift({
        country, 
        restaurant: document.getElementById('log-restaurant').value || "Unnamed",
        food, service, vibe, overall,
        notes: document.getElementById('log-notes').value,
        date: finalDate
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

    div.innerHTML = data.map((item, i) => `
        <div class="diary-card" style="position: relative; padding-top: 15px;">
            <button class="delete-btn" onclick="delEntry(${i})" style="position: absolute; top: 10px; right: 10px; z-index: 10;">×</button>
            
            <div style="display:flex; flex-direction: column; gap: 2px;">
                <div style="display:flex; align-items:center; gap:8px;">
                    <img src="${getFlagUrl(item.country)}" style="width:20px; border-radius:3px;">
                    <b style="font-size:1.1rem;">${item.country}</b>
                </div>
                
                <span style="font-size: 0.75rem; opacity: 0.6; margin-bottom: 5px;">
                     Visited on: ${item.date}
                </span>
            </div>

            <div style="border-top: 1px solid rgba(255,255,255,0.1); margin: 8px 0; padding-top: 8px;">
                <small style="opacity:0.8; display:block;">${item.restaurant}</small>
                <div style="font-size:1.2rem; margin:5px 0; color: #f1c40f;">${item.overall} ⭐</div>
                <p style="font-size:0.85rem; line-height:1.4; opacity: 0.9;">${item.notes}</p>
            </div>
        </div>
    `).join('');
}

window.delEntry = (i) => {
    const d = JSON.parse(localStorage.getItem('foodDiary') || "[]");
    d.splice(i, 1); 
    localStorage.setItem('foodDiary', JSON.stringify(d)); 
    renderDiary();
    updateProgressBar();
};

window.updateRank = function(category) {
    document.querySelectorAll('.rank-opt').forEach(btn => {
        if (btn.textContent.toLowerCase().trim() === category.toLowerCase()) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    const data = JSON.parse(localStorage.getItem('foodDiary') || "[]");
    const sorted = [...data].sort((a, b) => (b[category] || 0) - (a[category] || 0));
    const div = document.getElementById('rankings-list'); 
    if (!div) return;

    div.innerHTML = sorted.map((item, i) => {
        let medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '';
        return `
        <div class="diary-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom:8px;">
                <div style="color:#ff6b6b; font-weight:bold; font-size: 1.2rem;">#${i + 1}</div>
                <div style="font-size: 1.5rem;">${medal}</div>
            </div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:5px;">
                <img src="${getFlagUrl(item.country)}" style="width:20px; border-radius:2px;">
                <b style="font-size:1rem;">${item.country}</b>
            </div>
            <small>${item.restaurant}</small>
            <div style="margin-top: 8px; background: rgba(0,0,0,0.05); padding: 5px; border-radius: 8px;">
                <span style="font-weight:bold; font-size:1.1rem;">${item[category] || 0}</span> ⭐ 
                <span style="opacity:0.6; font-size:0.75rem; text-transform:uppercase;">${category}</span>
            </div>
        </div>
        `;
    }).join('');
    if (data.length === 0) div.innerHTML = '<p style="text-align:center; width:100%;">No logs found yet!</p>';
};

// --- INIT ---
const themeToggle = document.getElementById('theme-toggle');
themeToggle.onchange = () => {
    const theme = themeToggle.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
};
if (localStorage.getItem('theme') === 'dark') {
    themeToggle.checked = true; document.documentElement.setAttribute('data-theme', 'dark');
}

document.getElementById('btn-spin').onclick = spin;

document.getElementById('btn-close').onclick = () => {
    const popup = document.getElementById("popup");
    popup.classList.remove("show");
    setTimeout(() => {
        popup.classList.add("hidden");
        drawWheel(); 
    }, 300);
};

document.getElementById('btn-reset').onclick = () => { 
    if(confirm("Reset everything? This will clear your spun list and reload the wheel.")) { 
        localStorage.removeItem("spunCountries"); 
        location.reload(); 
    }
};

setupDL(); 
drawWheel(); 
updateProgressBar();
