// === Dark Mode Toggle ===
const toggleDark = document.getElementById("toggle-dark");

toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// === Modal Contact Form Logic ===
const modal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("contactBtn");
const closeModalBtn = document.querySelector(".close");

// Open modal on button click
openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal on 'X' click
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if user clicks outside content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// === Form Submission Handler (prevent default) ===
const form = document.querySelector(".modal-content form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! I’ll get back to you shortly.");
  modal.style.display = "none";
});

