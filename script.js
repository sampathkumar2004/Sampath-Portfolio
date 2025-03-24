// Smooth Scroll with Offset
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 80; // Matches the padding-top in CSS
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Fade-In Animation on Scroll
const fadeIns = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    fadeIns.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.classList.add('visible');
        }
    });
});

// Trigger fade-in for elements already in view on load
document.addEventListener('DOMContentLoaded', () => {
    fadeIns.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight - 100) {
            element.classList.add('visible');
        }
    });
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progress-bar').style.width = scrollPercent + '%';
});

// Back-to-Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});