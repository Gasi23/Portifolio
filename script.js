const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Abrir modal ao clicar no item da galeria
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = item.src;
    });
});

// Fechar modal ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Partículas de fundo (usando particles.js)
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js carregado!');
});

// Menu dinâmico que muda ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Cursor personalizado
const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
document.body.appendChild(cursor);

// Movimentar o cursor conforme o mouse
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Alterações no cursor ao passar por links
document.querySelectorAll('a, button').forEach((element) => {
    element.addEventListener('mouseenter', () => cursor.classList.add('active'));
    element.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

// Fechar modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
    if (e.target !== modalImg) {
        modal.style.display = 'none';
    }
});
