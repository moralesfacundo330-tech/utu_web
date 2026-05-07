document.addEventListener('DOMContentLoaded', () => {
    const liveTag = document.querySelector('.live-tag');
    
    // Simulación de interactividad: Cambiar opacidad al hacer click en el icono
    const playIcon = document.querySelector('.play-icon');
    playIcon.addEventListener('click', () => {
        alert('Iniciando transmisión de accesibilidad...');
    });

    // Log para verificar que el sistema está activo (estilo consola técnica)
    console.log("Sistema de Administración UTU - Iniciado");
    console.log("Ubicación detectada: Salto, Uruguay");
});