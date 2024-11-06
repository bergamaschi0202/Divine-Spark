function handleScroll() {
    const elements = document.querySelectorAll('.secao'); // Seleciona todas as seções principais
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100; // Um pouco antes do elemento entrar na tela
        if (isVisible) {
            el.classList.add('fade-in'); // Adiciona a animação fade-in
        }
    });
}

// Chama a função quando o usuário rola a página
window.addEventListener('scroll', handleScroll);
// E também a chama ao carregar a página para ativar seções já visíveis
window.addEventListener('load', handleScroll);