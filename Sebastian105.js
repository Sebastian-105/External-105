
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

  document.body.insertAdjacentHTML('beforeend', icon);
}

sebastian();
