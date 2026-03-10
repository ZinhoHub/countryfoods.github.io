// Full list of countries
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

let countries = [...countriesFull];
let spun = JSON.parse(localStorage.getItem("spunCountries") || "[]");
countries = countries.filter(c => !spun.includes(c.name));

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = canvas.width / 2.05 - 1;

let currentAngle = 0;
let spinning = false;

const colors = [
    "#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#9D4EDD", "#FF9F1C",
    "#FF85E6", "#52D3D8", "#FFCC5C", "#4ECDC4"
];

function drawWheel() {
    if (countries.length === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "bold 28px Arial";
        ctx.fillStyle = "#e74c3c";
        ctx.textAlign = "center";
        ctx.fillText("All countries spun!", centerX, centerY);
        return;
    }

    const arc = (2 * Math.PI) / countries.length;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    countries.forEach((country, i) => {
        const start = currentAngle + i * arc;
        const end = start + arc;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, start, end);
        ctx.closePath();

        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(start + arc / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "black";
        ctx.font = "bold 9px Arial";
        ctx.fillText(country.code, radius - 3, 3);
        ctx.restore();
    });
}

function spin() {
    if (spinning || countries.length === 0) return;
    spinning = true;

    const extraSpins = 5 + Math.random() * 5;
    const targetAngle = extraSpins * 2 * Math.PI + currentAngle;
    const duration = 6800;
    const startTime = performance.now();

    function animate(time) {
        const elapsed = time - startTime;
        let progress = elapsed / duration;
        if (progress > 1) progress = 1;

        const ease = 1 - Math.pow(1 - progress, 4);
        currentAngle = targetAngle * ease;

        drawWheel();

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            spinning = false;
            finishSpin();
        }
    }

    requestAnimationFrame(animate);
}

function finishSpin() {
    const arc = (2 * Math.PI) / countries.length;
    let finalAngle = currentAngle % (2 * Math.PI);
    if (finalAngle < 0) finalAngle += 2 * Math.PI;

    const arrowAngle = -Math.PI / 2;
    let normalized = (arrowAngle - finalAngle + 2 * Math.PI) % (2 * Math.PI);
    let index = Math.floor(normalized / arc) % countries.length;

    const winner = countries[index];
    showPopup(winner);
    spun.push(winner.name);
    localStorage.setItem("spunCountries", JSON.stringify(spun));
}

function showPopup(country) {
    document.getElementById("popupCountry").textContent = country.name;
    document.getElementById("popupFlag").src = `https://flagcdn.com/w320/${country.code.toLowerCase()}.png`;
    document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}

function resetGame() {
    if (!confirm("Reset all spun countries and start over?")) return;
    localStorage.removeItem("spunCountries");
    location.reload();
}

// Event listeners
document.getElementById("btn-spin")?.addEventListener("click", spin);
document.getElementById("btn-reset")?.addEventListener("click", resetGame);
document.getElementById("btn-close")?.addEventListener("click", closePopup);

// Initial draw
drawWheel();

// Theme handling
const themeToggle = document.getElementById('theme-toggle');
const htmlRoot = document.documentElement;

function setTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeToggle) themeToggle.checked = (theme === 'dark');
}

function initTheme() {
    let theme = localStorage.getItem('theme');
    if (!theme) {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    setTheme(theme);
}

if (themeToggle) {
    themeToggle.addEventListener('change', () => {
        setTheme(themeToggle.checked ? 'dark' : 'light');
    });
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

initTheme();
