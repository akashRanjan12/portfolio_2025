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
document.addEventListener("DOMContentLoaded", function () {
  const texts = ["Akash Ranjan", "a Developer", "a Designer", "a Creator"];
  let count = 0;
  let index = 0;
  let currentText = "";
  let isDeleting = false;
  const typingElement = document.querySelector(".typing-text");

  function type() {
    currentText = texts[count];

    if (!isDeleting) {
      // typing forward
      typingElement.textContent = currentText.slice(0, ++index);
      if (index === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1500); // wait before erasing
        return;
      }
    } else {
      // erasing backward
      typingElement.textContent = currentText.slice(0, --index);
      if (index === 0) {
        isDeleting = false;
        count = (count + 1) % texts.length; // move to next word
        setTimeout(type, 500); // wait before typing new word
        return;
      }
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }

  // Start typing after short delay
  setTimeout(type, 1000);

  // Interactive background animation
  document.addEventListener("mousemove", (e) => {
    const circles = document.querySelectorAll(".circles li");
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    circles.forEach((circle, index) => {
      const speed = (index + 1) / 10;
      const xOffset = x * speed * 100;
      const yOffset = y * speed * 100;
      circle.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });

    const decorations = document.querySelectorAll(".decoration");
    decorations.forEach((dec, index) => {
      const speed = (index + 1) / 20;
      const xOffset = x * speed * 30;
      const yOffset = y * speed * 30;
      dec.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
  });
});
