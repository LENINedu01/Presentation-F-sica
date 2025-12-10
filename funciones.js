/* ======== LOADER CONTROL ======== */
window.onload = function () {
    // NO se oculta automáticamente, solo se prepara la página
    document.getElementById("loader").style.display = "flex";
};

function iniciarPresentacion() {
    document.getElementById("loader").style.display = "none";
    mostrarSeccion("presentacion"); // pon el ID de tu primera sección
}


/* ======== CAMBIAR SECCIONES ======== */
function mostrarSeccion(id) {
    let secciones = document.querySelectorAll(".seccion");
    secciones.forEach(sec => sec.classList.remove("activa"));

    document.getElementById(id).classList.add("activa");

    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ======== EFECTO SUAVE EN SIDEBAR ======== */
let items = document.querySelectorAll(".sidebar ul li");

items.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.transform = "translateX(5px)";
    });
    item.addEventListener("mouseleave", () => {
        item.style.transform = "translateX(0)";
    });
});

/* ======== ANIMACIONES AL HACER SCROLL ======== */
function animarScroll() {
    let elementos = document.querySelectorAll(".seccion h2, .seccion p, .img-centro, .img-centro-grande");

    elementos.forEach(el => {
        let pos = el.getBoundingClientRect().top;
        let pantalla = window.innerHeight;

        if (pos < pantalla - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", animarScroll);
/* ======== CONFIGURAR EFECTO DE ANIMACIÓN ======== */
document.querySelectorAll(".seccion h2, .seccion p, .img-centro, .img-centro-grande").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "0.7s ease";
});

/* ======== BOTÓN PARA SIMULAR AVANCE AUTOMÁTICO ======== */
function avanzarAutomatico(lista) {
    let index = 0;

    setInterval(() => {
        if (index >= lista.length) index = 0;
        mostrarSeccion(lista[index]);
        index++;
    }, 5000); // cada 5 segundos
}

/* ======== EJEMPLO: activar si lo necesitas ======== */
// avanzarAutomatico(["intro", "objetivos", "actividades"]);

/* ======== RESALTAR MENÚ ACTIVO ======== */
items.forEach(item => {
    item.addEventListener("click", () => {
        items.forEach(i => i.style.background = "");
        item.style.background = "#303030";
    });
});
