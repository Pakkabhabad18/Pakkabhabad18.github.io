function startTime() {
  const today = new Date();
  const h = today.getHours().toString().padStart(2,'0');
  const m = today.getMinutes().toString().padStart(2,'0');
  const s = today.getSeconds().toString().padStart(2,'0');
  document.getElementById('txt').textContent = `Current Time: ${h}:${m}:${s}`;
  setTimeout(startTime, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('Page last updated:', new Date(document.lastModified).toLocaleString());
});
