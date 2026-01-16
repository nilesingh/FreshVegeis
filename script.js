// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".middle");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuBtn.innerHTML = nav.classList.contains("active")
    ? '<i class="ri-close-line"></i>'
    : '<i class="ri-menu-line"></i>';
});
