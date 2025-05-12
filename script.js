document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mainNav = document.querySelector(".main-nav ul");

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener("click", function () {
      mainNav.classList.toggle("active");
      this.setAttribute("aria-expanded", mainNav.classList.contains("active"));
    });
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".main-nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (mainNav.classList.contains("active")) {
        mainNav.classList.remove("active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Newsletter form submission
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.querySelector("input").value;

      // In a real app, you would send this to a server
      console.log("Subscribed email:", email);

      // Show success message
      alert("Thank you for subscribing to our newsletter!");
      this.reset();
    });
  }

  // Contact form validation and submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Reset error messages
      document.querySelectorAll(".error-message").forEach((el) => {
        el.style.display = "none";
      });

      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      let isValid = true;

      // Validate name
      if (name === "") {
        document.getElementById("name-error").textContent = "Name is required";
        document.getElementById("name-error").style.display = "block";
        isValid = false;
      }

      // Validate email
      if (email === "") {
        document.getElementById("email-error").textContent =
          "Email is required";
        document.getElementById("email-error").style.display = "block";
        isValid = false;
      } else if (!isValidEmail(email)) {
        document.getElementById("email-error").textContent =
          "Please enter a valid email";
        document.getElementById("email-error").style.display = "block";
        isValid = false;
      }

      // Validate subject
      if (subject === "") {
        document.getElementById("subject-error").textContent =
          "Subject is required";
        document.getElementById("subject-error").style.display = "block";
        isValid = false;
      }

      // Validate message
      if (message === "") {
        document.getElementById("message-error").textContent =
          "Message is required";
        document.getElementById("message-error").style.display = "block";
        isValid = false;
      }

      if (isValid) {
        // In a real app, you would send this data to a server
        console.log("Form submitted:", { name, email, subject, message });

        // Show success message
        contactForm.style.display = "none";
        document.getElementById("form-success").style.display = "block";

        // Reset form
        setTimeout(() => {
          contactForm.reset();
          contactForm.style.display = "block";
          document.getElementById("form-success").style.display = "none";
        }, 3000);
      }
    });
  }

  // Email validation helper function
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
