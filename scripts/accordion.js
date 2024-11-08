document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los botones de acordeón
    const buttons = document.querySelectorAll(".toggle-button");

    // Agregar el evento de clic a cada botón
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Obtener el siguiente elemento hermano (el contenido)
            const content = this.nextElementSibling;

            // Alternar la visibilidad del contenido
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                this.textContent = "▲";
            } else {
                content.style.display = "none";
                this.textContent = "▼";
            }
        });
    });
});