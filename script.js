// Select all elements with reveal, skill-item, project-item, and cert-item classes
const reveals = document.querySelectorAll('.reveal, .skill-item, .project-item, .cert-item');

function revealOnScroll() {
  reveals.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top <= windowHeight - 50) {
      el.classList.add('show');
    }
  });
}

// Run on scroll and initial load
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
