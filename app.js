const slide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("#navbar");
  const header = document.querySelector(".main-header");
  const navLinks = document.querySelectorAll(".nav-link");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    header.classList.toggle("main-header-active");
    burger.classList.toggle("toggle");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-active");
        header.classList.remove("main-header-active");
        burger.classList.remove("toggle");
      });
    });
  });
};
slide();
