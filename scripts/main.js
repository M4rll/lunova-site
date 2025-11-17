// Função para scroll suave
function scrollToProducts() {
    document.getElementById('produtos').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Função para o formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contato-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
        });
    }
});

// Adicionar classe no scroll para header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});
