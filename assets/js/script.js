// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll animation for project cards
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".project-card").forEach((card) => {
  observer.observe(card);
});

// Form submission handling
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! I will respond shortly.");
  this.reset();
});
