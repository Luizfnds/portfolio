let btnMenu = document.querySelector("#menu-principal")
let menu = document.querySelector("aside");

function acionarMenu() {
    if (menu.style.visibility === "visible") {
        menu.style.visibility = "hidden";
        btnMenu.innerHTML = '<i class="fa-solid fa-caret-down"></i>'
    } else {
        menu.style.visibility = "visible";
        btnMenu.innerHTML = '<i class="fa-solid fa-caret-up"></i>'
    }
}