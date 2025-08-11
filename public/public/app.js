document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Typewriter effect on intro screen
  const tw = document.getElementById('typewriter');
  if (tw) {
    const text = 'protocol initiated: OASIS';
    let i = 0;
    const interval = setInterval(() => {
      tw.textContent = text.slice(0, i + 1);
      i++;
      if (i === text.length) {
        clearInterval(interval);
        document.body.addEventListener('click', () => {
          window.location.href = 'home.html';
        }, { once: true });
      }
    }, 80);
  }

  // Contact form handler
  const contactForm = document.getElementById('contactForm');
  const contactOut = document.getElementById('contactOut');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      contactOut.textContent = 'Sending...';
      try {
        const res = await fetch('/form/submit', { method: 'POST', body: new FormData(contactForm) });
        const json = await res.json();
        contactOut.textContent = JSON.stringify(json, null, 2);
        if (json.ok) contactForm.reset();
      } catch (err) {
        contactOut.textContent = String(err);
      }
    });
  }
});
