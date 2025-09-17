// Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.querySelector("i").classList.toggle("fa-bars");
  menuBtn.querySelector("i").classList.toggle("fa-times");
});

// Close menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.querySelector("i").classList.add("fa-bars");
    menuBtn.querySelector("i").classList.remove("fa-times");
  });
});

// Scroll animations
const animateElements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

animateElements.forEach((el) => {
  observer.observe(el);
});

// Form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for your message! I will get back to you soon.");
  this.reset();
});

// hero page
// Text typing effect
