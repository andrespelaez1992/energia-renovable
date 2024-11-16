
function mostrarImagen(imagen) {
    const modal = document.getElementById("modal");
    const imagenAmpliada = document.getElementById("imagen-ampliada");
    const caption = document.getElementById("caption");

    imagenAmpliada.src = imagen;
    caption.innerHTML = imagen; // Cambia esto si deseas una descripción diferente
    modal.style.display = "block";
}

function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

