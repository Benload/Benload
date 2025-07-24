// assets/js/main.js

document.addEventListener('DOMContentLoaded', function () {

    // Funcionalidad del Menú Móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header'); // Necesitamos el header para calcular la altura

    if (menuToggle && navLinks && header) {
        // Ajustar la posición 'top' del menú desplegable dinámicamente
        const headerHeight = header.offsetHeight;
        navLinks.style.top = `${headerHeight}px`;

        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active'); // Añade o quita la clase 'active'
        });

        // Cerrar menú al hacer clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });

        // Recalcular altura del header si la ventana cambia de tamaño (poco probable pero seguro)
        window.addEventListener('resize', () => {
            const currentHeaderHeight = header.offsetHeight;
            navLinks.style.top = `${currentHeaderHeight}px`;
        });
    }

}); 