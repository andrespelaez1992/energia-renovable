
// Cambiar el color de fondo del header cuando se hace scroll
window.onscroll = function() {
    let header = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};




document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelectorAll(".galeria .imagen");
    let indiceActual = 0;

    document.getElementById("prev").addEventListener("click", function() {
        imagenes[indiceActual].classList.remove("activo");
        indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
        imagenes[indiceActual].classList.add("activo");
    });

    document.getElementById("next").addEventListener("click", function() {
        imagenes[indiceActual].classList.remove("activo");
        indiceActual = (indiceActual + 1) % imagenes.length;
        imagenes[indiceActual].classList.add("activo");
    });
});
