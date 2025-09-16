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
  let letter = "";

  function type() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing-text").textContent = letter;
    if (letter.length === currentText.length) {
      setTimeout(erase, 1500);
    } else {
      setTimeout(type, 100);
    }
  }

  function erase() {
    letter = currentText.slice(0, --index);
    document.querySelector(".typing-text").textContent = letter;
    if (letter.length === 0) {
      count++;
      index = 0;
      setTimeout(type, 500);
    } else {
      setTimeout(erase, 50);
    }
  }

  // Start the typing effect after initial animation
  setTimeout(type, 2000);

  // Interactive background animation
  document.addEventListener("mousemove", (e) => {
    const circles = document.querySelectorAll(".circles li");
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    circles.forEach((circle, index) => {
      const speed = (index + 1) / 10;
      const xOffset = x * speed * 100;
      const yOffset = y * speed * 100;

      circle.style.transform = `translateX(${xOffset}px) translateY(${yOffset}px)`;
    });

    const decorations = document.querySelectorAll(".decoration");
    decorations.forEach((dec, index) => {
      const speed = (index + 1) / 20;
      const xOffset = x * speed * 30;
      const yOffset = y * speed * 30;

      dec.style.transform = `translate(${xOffset}px, ${yOffset}px) ${dec.style.transform
        .split(" ")
        .slice(2)
        .join(" ")}`;
    });
  });
});
