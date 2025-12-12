// eventos.js - Funcionalidad para la página de eventos

document.addEventListener('DOMContentLoaded', function() {
    // Filtrado de eventos por categoría
    const filtros = document.querySelectorAll('.btn-filtro');
    const eventos = document.querySelectorAll('.card-evento');
    
    filtros.forEach(filtro => {
        filtro.addEventListener('click', function() {
            // Remover clase activa de todos los filtros
            filtros.forEach(f => f.classList.remove('activo'));
            // Agregar clase activa al filtro seleccionado
            this.classList.add('activo');
            
            const categoria = this.getAttribute('data-filtro');
            
            // Mostrar/ocultar eventos según la categoría
            eventos.forEach(evento => {
                if (categoria === 'todos') {
                    evento.style.display = 'block';
                    // Agregar animación al mostrar
                    evento.style.animation = 'slideUp 0.5s ease-out';
                } else {
                    if (evento.getAttribute('data-categoria') === categoria) {
                        evento.style.display = 'block';
                        evento.style.animation = 'slideUp 0.5s ease-out';
                    } else {
                        evento.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Efecto hover mejorado para las cards
    eventos.forEach(evento => {
        evento.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        evento.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // Simulación de registro a evento
    const botonesRegistro = document.querySelectorAll('.btn-evento');
    
    botonesRegistro.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtener información del evento
            const card = this.closest('.card-evento');
            const titulo = card.querySelector('h3').textContent;
            const fecha = card.querySelector('.evento-fecha span').textContent;
            
            // Mostrar mensaje de confirmación
            Swal.fire({
                title: '¡Registro exitoso!',
                html: `Te has registrado al evento:<br><strong>${titulo}</strong><br>Fecha: ${fecha}`,
                icon: 'success',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#ff006a',
                background: '#0a0a0f',
                color: '#ffffff'
            });
            
            // Cambiar texto del botón
            const originalText = this.textContent;
            this.textContent = '¡Registrado!';
            this.style.background = 'linear-gradient(135deg, #00cc00, #00eaff)';
            this.style.cursor = 'default';
            
            // Deshabilitar el botón temporalmente
            this.style.pointerEvents = 'none';
            
            // Revertir después de 3 segundos (simulación)
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = 'linear-gradient(135deg, #ff006a, #00eaff)';
                this.style.pointerEvents = 'auto';
            }, 3000);
        });
    });
    
    // Inicializar animaciones de entrada
    setTimeout(() => {
        document.querySelector('.header-eventos').style.opacity = '1';
    }, 100);
});