const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

//TODO: changeTheme

// function changeTheme(){
//   const currentTheme = rootHtml.getAttribute("data-theme");

//   currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")

//   toggleTheme.classList.toggle("bi-sun")
//   toggleTheme.classList.toggle("bi-moon-stars")
// }

// toggleTheme.addEventListener("click", changeTheme);

// document.addEventListener("DOMContentLoaded", function () {
//   const accordionHeaders = document.querySelectorAll(".accordion__header");

//   accordionHeaders.forEach((header) => {
//     header.addEventListener("click", () => {
//       const accordionItem = header.parentElement;
//       const accordionActive = accordionItem.classList.contains("active");

//       // Fecha todos os outros itens
//       document.querySelectorAll(".accordion__item").forEach((item) => {
//         item.classList.remove("active");
//       });

//       // Abre o item clicado se ele não estiver ativo
//       if (!accordionActive) {
//         accordionItem.classList.add("active");
//       }
//     });
//   });
// });
