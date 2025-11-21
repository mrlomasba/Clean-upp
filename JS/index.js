document.addEventListener('DOMContentLoaded', () => {
    // Referencias a elementos del DOM
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const quoteForm = document.getElementById('quote-form');
    const formMessage = document.getElementById('form-message');

    // 1. Lógica para el menú móvil (Toggle visibility)
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Ocultar menú móvil después de hacer clic en un enlace (para mejor UX)
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }


    // 2. Lógica de manejo del formulario de cotización (Simulación de envío)
    if (quoteForm && formMessage) {
        quoteForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Detiene el envío real del formulario

            // Simulación de recolección de datos
            const formData = new FormData(quoteForm);
            const data = Object.fromEntries(formData.entries());

            // Muestra el mensaje de éxito (Feedback al usuario)
            formMessage.textContent = `¡Gracias por tu solicitud, ${data.name}! La analizaremos y te contactaremos a ${data.email} o al teléfono ${data.phone} en breve.`;
            formMessage.classList.remove('hidden', 'bg-red-100', 'text-red-700');
            formMessage.classList.add('bg-green-100', 'text-green-700');
            
            // Desplazarse al mensaje para que sea visible
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Limpiar el formulario para la siguiente cotización
            quoteForm.reset();

            // Opcional: Ocultar el mensaje después de unos segundos
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 8000);
        });
    }
});