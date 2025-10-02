function handleScroll() {
    const elements = document.querySelectorAll('.secao');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100; 
        if (isVisible) {
            el.classList.add('fade-in'); 
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);