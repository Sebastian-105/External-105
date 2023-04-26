    if (document.getElementByTagName('html').includes(`<script src="assets/js/sebastian-105.js">`) ||document.getElementByTagName('html').includes(`<script src="/assets/js/sebastian-105.js">`) || document.getElementByTagName('html').includes(`<script src="assets/js/about-blank.js">`) || document.getElementByTagName('html').includes(`<script src="/assets/js/about-blank.js">`)) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = "/assets/js/Sebastian-105.js";  // set its src to the provided URL
    var script2 = document.createElement("script");  // create a script DOM node
    script2.src = "/assets/js/about-blank.js";  // set its src to the provided URL
   
    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
    }
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
alsdf();
jquery();
jquerylib();
