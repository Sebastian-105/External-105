
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
    opacity: 0.5;
    transition-property: opacity, transform;
    transition: opacity 120ms, transform 120ms;
    transition-timing-function: ease-out;
  }
  #badge:hover img {
    transform: scale(1.05);
    opacity: 1;
  }
  </style>
  <a id="badge" href="/index.html"><img src="https://external-105.netlify.app/105.png" alt="105" title="Sebastian-105"></a>
    `;

  document.body.insertAdjacentHTML('beforeend', icon);
}

sebastian();
