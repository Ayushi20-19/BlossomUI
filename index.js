const docsideBarShow = () => {
  document.querySelector(".docnavsidebar").classList.toggle("active");
};

// navbar componet js
const sideBarShow = () => {
  document.querySelector(".navsidebar").classList.toggle("active");
};

// theme js
const modeChange = () => {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var link = document.querySelectorAll(".link");
  link.forEach((link) => {
    link.classList.toggle("black-link");
  });

  var nav = document.querySelector(".navbar");
  nav.classList.toggle("dark-nav");

  var icon = document.querySelector("#icon-theme");
  icon.classList.toggle("fa-sun");
};
