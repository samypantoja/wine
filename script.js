section = document.querySelector("section"),
overlay = document.querySelector(".overlay"),
showBtn = document.querySelector(".showModal"),
closeBtn = document.querySelector("noBtn");

showBtn.addEventListener("click", () => section.classList.add("active"));
closeBtn.addEventListener("click", () => section.classList.remove("active"));

