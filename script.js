const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
  for (let el of reveals) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) el.classList.add('show');
  }
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
