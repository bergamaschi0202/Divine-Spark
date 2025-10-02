function handleScroll() {
    const elements = document.querySelectorAll('.secao'); // seleciona todas as seções principais
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100; // antes do elemento entrar na tela
        if (isVisible) {
            el.classList.add('fade-in'); // fade-in
        }
    });
}

// chama a função quando o usuário rola a página
window.addEventListener('scroll', handleScroll);
// chama ao carregar a página para ativar seções já visíveis
window.addEventListener('load', handleScroll);