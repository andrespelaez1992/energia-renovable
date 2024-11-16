document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelectorAll(".galeria img");
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
