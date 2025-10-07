document.addEventListener('DOMContentLoaded', function() {
    // 1. Funcionalidad del Menú Hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('open');
        });
    }

    // 2. Precarga del Servicio en el Formulario de Contacto
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        const urlParams = new URLSearchParams(window.location.search);
        const servicioSolicitado = urlParams.get('servicio');
        const servicioInput = document.getElementById('servicio');

        if (servicioSolicitado && servicioInput) {
            let textoServicio = '';
            
            // Mapeo simple del código del servicio a un texto legible
            switch (servicioSolicitado) {
                case 'Preventivo':
                    textoServicio = 'Solicitud de Mantenimiento Preventivo';
                    break;
                case 'Correctivo':
                    textoServicio = 'Solicitud de Mantenimiento Correctivo';
                    break;
                case 'Infraestructura':
                    textoServicio = 'Solicitud de Instalación de Infraestructura/Redes';
                    break;
                default:
                    textoServicio = 'Consulta o Pedido de Servicio';
            }
            
            servicioInput.value = textoServicio;
        }
    }
});