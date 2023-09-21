const hamburger = document.querySelector('.hamburger');
const navButtonsMobile = document.querySelector('.nav-buttons-mobile');
const lines = document.querySelectorAll('.line');

hamburger.addEventListener('click', () => {
    toggleNavigation();
});

function toggleNavigation() {
    navButtonsMobile.classList.toggle('hidden-nav');
    lines[0].classList.toggle('close-1');
    lines[1].classList.toggle('close-2');
    lines[2].classList.toggle('close-3');
}

document.body.addEventListener('click', (event) => {
    if (!navButtonsMobile.contains(event.target) && !hamburger.contains(event.target)) {
        if (!navButtonsMobile.classList.contains('hidden-nav')) {
            toggleNavigation();
        }
    }
});


const navigationLinks = document.querySelectorAll('.nav-buttons-mobile a');
navigationLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleNavigation();
    });
});


