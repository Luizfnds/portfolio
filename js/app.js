const menuLinks = document.querySelectorAll('#ul-nav a[href^="#"]');

function sla(link) {

    document.querySelector(".apresentacao").classList.add("title-marcado")

    document.querySelector("main").addEventListener("scroll", (e) => {

        let scroll = document.querySelector("main").scrollTop;
        let list = document.querySelectorAll(".title");

        if (scroll < 400) {
            list.forEach((e) => { e.classList.remove("title-marcado") });
            document.querySelector(".apresentacao").classList.add("title-marcado")
        } else if (scroll < 1000) {
            list.forEach((e) => { e.classList.remove("title-marcado") });
            document.querySelector(".sobre-mim").classList.add("title-marcado")
        } else if (scroll < 1700) {
            list.forEach((e) => { e.classList.remove("title-marcado") });
            document.querySelector(".projetos").classList.add("title-marcado")
        } else {
            list.forEach((e) => { e.classList.remove("title-marcado") });
            document.querySelector(".contato").classList.add("title-marcado")
        }
    });
}

sla();



