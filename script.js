
const year = document.querySelector("#year");
const header = document.querySelector(".site-header");
const navLinks = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(
  ".case-card, .profile-panel, .skills-panel, .process-grid article"
);
const hoverItems = document.querySelectorAll(
  ".case-card, .profile-panel, .skills-panel, .process-grid article, .button, .nav-cta"
);

if (year) {
  year.textContent = new Date().getFullYear();
}

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));

hoverItems.forEach((item) => {
  item.addEventListener("mousemove", (event) => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    item.style.setProperty("--mouse-x", `${x}px`);
    item.style.setProperty("--mouse-y", `${y}px`);
  });
});
