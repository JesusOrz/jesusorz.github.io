/* ════════════════════════════════
   MAIN JAVASCRIPT
   ════════════════════════════════ */

// ── Scroll progress line ──
const scrollLine = document.getElementById('scrollLine');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrolled / maxScroll) * 100;
  scrollLine.style.width = progress + '%';
});

// ── Reveal on scroll ──
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const siblings = Array.from(entry.target.parentElement.children);
      const index = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80 * index);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
});

reveals.forEach(el => observer.observe(el));
