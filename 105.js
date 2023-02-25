
function sebastian() {

  const icon = `
  <style>
  #badge {
    position: fixed;
    cursor: pointer;
    bottom: 16px;
    left: 16px;
    z-index: 1000;
  }

  #badge img{
    opacity: 0.75;
    transition-property: opacity, transform;
    transition: opacity 120ms, transform 120ms;
    transition-timing-function: ease-out;
  }
  #badge:hover img {
    transform: scale(1.05);
    opacity: 1;
  }
  </style>
  <a id="badge" href="/index.html"><img src="https://icon105.netlify.app/105.round.png" style="width:50px;height:50px;" alt="105" title="Sebastian-105"></a>
    `;

  document.body.insertAdjacentHTML("beforeend", icon);
}
function css() {
// Create element:
const add = document.createElement("style");
para.innerText = "@import https://icon105.netlify.app/css/ads.css;";

// Append to body:
document.body.appendChild(add); }
function alsdf() {
  if (document.location.href.includes("game/c/")) {
// Create element:
const para = document.createElement("script");
para.src = "../../../assets/js/Sebastian-105.js";

// Append to body:
document.body.appendChild(para);
} else if (document.location.href.includes("105/") || document.location.href.includes("docs/")) {
  const doc105 = document.createElement("script");
para.src = "../../assets/js/Sebastian-105.js";

// Append to body:
document.body.appendChild(doc105);
} else if (document.location.href.includes("https://") || document.location.href.includes("http://")) {
  const main105 = document.createElement("script");
  para.src = "/assets/js/Sebastian-105.js";
  
  // Append to body:
  document.body.appendChild(main105);
} else {
  const main105 = document.createElement("script");
  para.src = "./assets/js/Sebastian-105.js";
  
  // Append to body:
  document.body.appendChild(main105);
}
}
function jquery() {
  if (document.location.href.includes("game/c/")) {
// Create element:
const jQuerypara = document.createElement("script");
para.src = "../../../assets/js/jQuery.min.js";

// Append to body:
document.body.appendChild(jQuerypara);
} else if (document.location.href.includes("105/") || document.location.href.includes("docs/")) {
  const jQuerydoc105 = document.createElement("script");
para.src = "../../assets/js/jQuery.min.js";

// Append to body:
document.body.appendChild(jQuerydoc105);
} else if (document.location.href.includes("https://") || document.location.href.includes("http://")) {
  const main105 = document.createElement("script");
  para.src = "/assets/js/jQuery.min.js";
  
  // Append to body:
  document.body.appendChild(jQuerydoc105);
} else {
  const jQuerymain105 = document.createElement("script");
  para.src = "./assets/js/jQuery.min.js";
  
  // Append to body:
  document.body.appendChild(jQuerymain105);
}
}
function jquerylib() {
// Create element:
const jquerylibjQuerypara = document.createElement("script");
para.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js";

// Append to body:
document.body.appendChild(jquerylibjQuerypara);
}
var onoff = localStorage.getItem('onoff') || '';
if (onoff != 'on') {
  sebastian();
}
function onoff() {
  localStorage.setItem('onoff','off');
}
function all() {
   if (document.location.href.includes("game/c")){
    alert('Go to my sister website! \nWhat is it:\nA Slime website\nGo to here --> "https://sunnyslimes.netlify.app"\nCoded by Sebastian-105\n-Sebastian-105')
}}
all()
alsdf();
jquery();
jquerylib();
