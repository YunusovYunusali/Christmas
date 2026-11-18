let darkButton = document.querySelector(".darkmode");
let lightButton = document.querySelector(".lightmode");
let menu = document.querySelector("#menu");

function darkMode() {
    document.body.classList.add("dark-theme");
    darkButton.style.display = "none";
    lightButton.style.display = "block";
}

function lightMode() {
    document.body.classList.remove("dark-theme");
    darkButton.style.display = "block";
    lightButton.style.display = "none";
}

function openMenu() {
    menu.classList.add("open");
}

function closeMenu() {
    menu.classList.remove("open");
}