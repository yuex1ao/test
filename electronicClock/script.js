function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour12: false });
    const date = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.querySelector('.time').textContent = time;
    document.querySelector('.date').textContent = date;
  }
  
  setInterval(updateTime, 1000);