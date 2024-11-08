// Función para mostrar el botón de desplazamiento hacia arriba
window.onscroll = function () { toggleScrollButton() };

function toggleScrollButton() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Función para desplazarse al inicio de la página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}