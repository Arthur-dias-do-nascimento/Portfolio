const header = document.querySelector("body > header");
const icon_mobile_menu = document.querySelector(".mobile-menu-icon > i");
const mobile_menu = document.querySelector(".mobile-menu");

icon_mobile_menu.addEventListener("click", () => {
    mobile_menu.classList.toggle("active")
})

window.addEventListener("scroll", () => {
    if (window.scrollY >= 10) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
})