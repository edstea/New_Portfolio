// Smooth Scroll to Sections
document.querySelectorAll(".nav-links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top:
          targetElement.offsetTop -
          document.querySelector(".navbar").offsetHeight,
        behavior: "smooth",
      });
    }
  });
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

themeToggle.addEventListener("click", () => {
  // Toggle between dark-mode and light-mode
  if (body.classList.contains("dark-mode")) {
    // Switch to light mode
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");

    // Change icon to sun
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    // Switch to dark mode
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");

    // Change icon to moon
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
});

// body.classList.toggle("dark-mode");
// body.classList.toggle("light-mode");

// Toggle icon between sun and moon
// if (body.classList.contains("dark-mode")) {
//   themeIcon.classList.remove("fa-sun");
//   themeIcon.classList.add("fa-moon");
// } else {
//   themeIcon.classList.remove("fa-moon");
//   themeIcon.classList.add("fa-sun");
// }

// Back to Top Button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Animate the button
// themeToggle.style.transition = "transform 0.3s ease-in-out";
// themeToggle.style.transform = "scale(1.2)";
// setTimeout(() => {
//   themeToggle.style.transform = "scale(1)";
// }, 300);

// Update button text
// themeToggle.textContent = body.classList.contains("dark-mode")
//   ? "Light Mode"
//   : "Dark Mode";

// Burger Menu
const burgerMenu = document.getElementById("burgerMenu");
const navLinks = document.getElementById("navLinks");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Animate burger menu icon
  burgerMenu.style.transition = "transform 0.3s ease-in-out";
  burgerMenu.style.transform = "scale(1.2)";
  setTimeout(() => {
    burgerMenu.style.transform = "scale(1)";
  }, 300);
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Google Sheets Integration
// const contactForm = document.getElementById("contactForm");
// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const formData = new FormData(contactForm);
//   fetch("https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_ID/exec", {
//     method: "POST",
//     body: formData,
//   })
//     .then((response) => {
//       if (response.ok) {
//         alert("Message sent successfully!");
//         contactForm.reset();
//       } else {
//         alert("Failed to send message.");
//       }
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again.");
//     });
// });
