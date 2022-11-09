let btnMenu = document.querySelector("#menu-principal")
let menu = document.querySelector("aside");

console.log(document.querySelector("body").clientWidth)

function medeTela() {
    window.addEventListener('resize', (e) => {
        if (document.querySelector("body").clientWidth > 920) {
            menu.style.visibility = "visible";
        }
    });
}

function acionarMenu() {

    if (menu.style.visibility === "visible") {
        menu.style.visibility = "hidden";
        btnMenu.innerHTML = '<i class="fa-solid fa-caret-down"></i>'
    } else {
        menu.style.visibility = "visible";
        btnMenu.innerHTML = '<i class="fa-solid fa-caret-up"></i>'
    }
}

medeTela();