document.getElementById("year").textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".project-card, .cap-item, .timeline-row, .tool-cloud span");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

revealItems.forEach((el, i) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(18px)";
  el.style.transition = `opacity .65s ease ${Math.min(i * .04, .3)}s, transform .65s ease ${Math.min(i * .04, .3)}s`;
  observer.observe(el);
});
