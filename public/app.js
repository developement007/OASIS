const helloBtn = document.getElementById('helloBtn');
const helloOut = document.getElementById('helloOut');
helloBtn?.addEventListener('click', async () => {
  helloBtn.disabled = true;
  helloOut.textContent = 'Loading...';
  try {
    const res = await fetch('/api/hello');
    const json = await res.json();
    helloOut.textContent = JSON.stringify(json, null, 2);
  } catch (err) {
    helloOut.textContent = String(err);
  } finally {
    helloBtn.disabled = false;
  }
});

// Contact form
const contactForm = document.getElementById('contactForm');
const contactOut = document.getElementById('contactOut');
contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  contactOut.textContent = 'Sending...';
  try {
    const res = await fetch('/form/submit', { method:'POST', body:new FormData(contactForm) });
    const json = await res.json();
    contactOut.textContent = JSON.stringify(json, null, 2);
    if (json.ok) contactForm.reset();
  } catch (err) {
    contactOut.textContent = String(err);
  }
});

// Mobile nav
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.display = open ? 'none' : 'flex';
  hamburger.setAttribute('aria-expanded', String(!open));
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();
