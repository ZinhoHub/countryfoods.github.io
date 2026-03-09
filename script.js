```javascript
// ===== COUNTRY DATA =====
// name = full country name
// code = ISO flag code used for flags

let countries = [

{name:"France",code:"FR"},
{name:"Japan",code:"JP"},
{name:"Italy",code:"IT"},
{name:"Spain",code:"ES"},
{name:"Portugal",code:"PT"},
{name:"Greece",code:"GR"},
{name:"Germany",code:"DE"},
{name:"United Kingdom",code:"GB"},
{name:"United States",code:"US"},
{name:"Canada",code:"CA"},
{name:"Mexico",code:"MX"},
{name:"Brazil",code:"BR"},
{name:"Argentina",code:"AR"},
{name:"Peru",code:"PE"},
{name:"Chile",code:"CL"},
{name:"China",code:"CN"},
{name:"India",code:"IN"},
{name:"Thailand",code:"TH"},
{name:"Vietnam",code:"VN"},
{name:"South Korea",code:"KR"},
{name:"Indonesia",code:"ID"},
{name:"Malaysia",code:"MY"},
{name:"Singapore",code:"SG"},
{name:"Philippines",code:"PH"},
{name:"Pakistan",code:"PK"},
{name:"Bangladesh",code:"BD"},
{name:"Turkey",code:"TR"},
{name:"Lebanon",code:"LB"},
{name:"Israel",code:"IL"},
{name:"Saudi Arabia",code:"SA"},
{name:"United Arab Emirates",code:"AE"},
{name:"Iran",code:"IR"},
{name:"Iraq",code:"IQ"},
{name:"Morocco",code:"MA"},
{name:"Egypt",code:"EG"},
{name:"Tunisia",code:"TN"},
{name:"South Africa",code:"ZA"},
{name:"Nigeria",code:"NG"},
{name:"Kenya",code:"KE"},
{name:"Ethiopia",code:"ET"},
{name:"Russia",code:"RU"},
{name:"Ukraine",code:"UA"},
{name:"Poland",code:"PL"},
{name:"Sweden",code:"SE"},
{name:"Norway",code:"NO"},
{name:"Finland",code:"FI"},
{name:"Denmark",code:"DK"},
{name:"Netherlands",code:"NL"},
{name:"Belgium",code:"BE"},
{name:"Switzerland",code:"CH"},
{name:"Austria",code:"AT"},
{name:"Hungary",code:"HU"},
{name:"Romania",code:"RO"},
{name:"Bulgaria",code:"BG"},
{name:"Czechia",code:"CZ"},
{name:"Slovakia",code:"SK"},
{name:"Croatia",code:"HR"},
{name:"Serbia",code:"RS"},
{name:"Bosnia and Herzegovina",code:"BA"},
{name:"Slovenia",code:"SI"},
{name:"Iceland",code:"IS"},
{name:"Ireland",code:"IE"},
{name:"Australia",code:"AU"},
{name:"New Zealand",code:"NZ"}

];


// ===== REMOVE ALREADY SPUN COUNTRIES =====

let spun = JSON.parse(localStorage.getItem("spunCountries") || "[]");

countries = countries.filter(c => !spun.includes(c.name));


// ===== CANVAS SETUP =====

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = canvas.width / 2 - 20;

let currentAngle = 0;
let spinning = false;


// ===== COLOR PALETTE =====

const colors = [
"#FF6B6B",
"#FFD93D",
"#6BCB77",
"#4D96FF",
"#9D4EDD",
"#FF9F1C"
];


// ===== DRAW WHEEL =====

function drawWheel(){

const arc = (2*Math.PI) / countries.length;

ctx.clearRect(0,0,canvas.width,canvas.height);

countries.forEach((country,i)=>{

const start = currentAngle + i*arc;
const end = start + arc;

ctx.beginPath();
ctx.moveTo(centerX,centerY);
ctx.arc(centerX,centerY,radius,start,end);
ctx.closePath();

ctx.fillStyle = colors[i % colors.length];
ctx.fill();

ctx.strokeStyle="white";
ctx.lineWidth=1;
ctx.stroke();


// draw acronym

ctx.save();
ctx.translate(centerX,centerY);
ctx.rotate(start + arc/2);

ctx.textAlign="right";
ctx.fillStyle="black";
ctx.font="10px Arial";

ctx.fillText(country.code,radius-40,4);

ctx.restore();

});


// pointer

ctx.fillStyle="#c0392b";

ctx.beginPath();
ctx.moveTo(centerX,15);
ctx.lineTo(centerX-20,55);
ctx.lineTo(centerX+20,55);
ctx.closePath();
ctx.fill();

}


// ===== SPIN FUNCTION =====

function spin(){

if(spinning || countries.length === 0) return;

spinning = true;

const spins = 6 + Math.random()*4;
const spinAngle = spins * 2*Math.PI;

const duration = 6000;

const startTime = performance.now();

function animate(time){

let progress = (time - startTime) / duration;

if(progress > 1) progress = 1;

const ease = 1 - Math.pow(1-progress,4);

currentAngle = spinAngle * ease;

drawWheel();

if(progress < 1){

requestAnimationFrame(animate);

}
else{

spinning = false;

let finalAngle = currentAngle % (2*Math.PI);

let pointerAngle = 3*Math.PI/2;

let adjusted = (pointerAngle - finalAngle + 2*Math.PI) % (2*Math.PI);

let index = Math.floor(adjusted / ((2*Math.PI)/countries.length));

let winner = countries[index];

showPopup(winner);


// save spun country

spun.push(winner.name);

localStorage.setItem("spunCountries", JSON.stringify(spun));

}

}

requestAnimationFrame(animate);

}


// ===== POPUP =====

function showPopup(country){

const popup = document.getElementById("popup");
const name = document.getElementById("popupCountry");
const flag = document.getElementById("popupFlag");

name.textContent = country.name;

flag.src = "https://flagcdn.com/w320/" + country.code.toLowerCase() + ".png";

popup.classList.remove("hidden");

}


function closePopup(){

document.getElementById("popup").classList.add("hidden");

}


// ===== INITIAL DRAW =====

drawWheel();
```
