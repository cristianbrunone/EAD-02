document.addEventListener("scroll", function() {
    const heroSection = document.querySelector(".hero-section");
    const navbarOverlay = document.getElementById("navbar-overlay");

    if (window.scrollY > heroSection.clientHeight * 0.5) {
        navbarOverlay.style.opacity = "1"; // Aparece suavemente
        navbarOverlay.style.visibility = "visible";
    } else {
        navbarOverlay.style.opacity = "0"; // Se desvanece suavemente
        setTimeout(() => {
            if (window.scrollY <= heroSection.clientHeight * 0.5) {
                navbarOverlay.style.visibility = "hidden";
            }
        }, 300); // Retraso para ocultarlo después de la animación
    }
});

document.addEventListener("scroll", function () {
    const servicesSection = document.querySelector(".services-section");
    const sectionTop = servicesSection.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight; // Detecta cuando el usuario está completamente en la sección

    if (scrollPosition > sectionTop + servicesSection.clientHeight * 0.3) {
        // Espera que el usuario haya entrado más del 30% en la sección antes de expandir
        servicesSection.classList.add("scrolled"); // Expande al 100%
    } else {
        servicesSection.classList.remove("scrolled"); // Mantiene el 40%
    }
});

// Obtém o formulário e o alerta de sucesso
const form = document.querySelector('form');
const successAlert = document.getElementById('success-alert');

// Função para mostrar o alerta após o envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário para simular um sucesso

    // Mostra o alerta de sucesso
    successAlert.style.display = 'block';

    // Limpa os campos do formulário
    form.reset();

    // Fecha o alerta automaticamente após 5 segundos (opcional)
    setTimeout(() => {
        successAlert.style.display = 'none';
    }, 5000);
});
