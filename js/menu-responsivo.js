let btnMenu = document.querySelector("#menu-principal")
let menu = document.querySelector("aside");

function acionarMenu() {
    console.log(menu.style.visibility)

    if (menu.style.visibility === "visible") {
        menu.style.visibility = "hidden";
    } else {
        menu.style.visibility = "visible";
    }
}