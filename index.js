const rootEl = document.documentElement;

const updateStatus = (e) => {
  const color = navigator.onLine ? "#23f926" :
  "#eb1742";
  rootEl.style.setProperty("--status-color", color)
}

window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);