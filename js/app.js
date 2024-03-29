const menuLinks = document.querySelectorAll('#ul-nav a[href^="#"]');
const btnMenu = document.querySelector("#menu-principal")
const menu = document.querySelector("aside");

function adicionarTituloMarcado() {
    document.querySelector(".apresentacao").classList.add("title-marcado")
    document.querySelector("main").addEventListener("scroll", (e) => {

        let scroll = document.querySelector("main").scrollTop;
        let list = document.querySelectorAll(".title");
        let altura = document.querySelector("body").clientHeight;

        if (scroll < (40 / 100) * altura) {
            list.forEach((e) => { e.classList.remove("title-marcado") });
            document.querySelector(".apresentacao").classList.add("title-marcado")
        } else if (scroll < (120 / 100) * altura) {
            list.forEach((e) => { e.classList.remove("title-marcado") });
            document.querySelector(".sobre-mim").classList.add("title-marcado")
        } else if (scroll < (210 / 100) * altura) {
            list.forEach((e) => { e.classList.remove("title-marcado") });
            document.querySelector(".projetos").classList.add("title-marcado")
        } else {
            list.forEach((e) => { e.classList.remove("title-marcado") });
            document.querySelector(".contato").classList.add("title-marcado")
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

function medirTela() {
    window.addEventListener('resize', (e) => {
        if (document.querySelector("body").clientWidth > 950) {
            menu.style.visibility = "visible";
        } else {
            menu.style.visibility = "hidden";
        }
    });
}

medirTela();
adicionarTituloMarcado();
