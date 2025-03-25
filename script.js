// Smooth Scroll with Header Offset
document.querySelectorAll('nav a, .cta-buttons a').forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = document.querySelector('header').offsetHeight; // Get header height
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset - 20; // Add extra padding (20px)

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Fade-In and Bounce-In Animation
const fadeIns = document.querySelectorAll('.fade-in');
const bounceIns = document.querySelectorAll('.bounce-in');
window.addEventListener('scroll', () => {
    fadeIns.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) element.classList.add('visible');
    });
    bounceIns.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) element.classList.add('visible');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    fadeIns.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight - 100) element.classList.add('visible');
    });
    bounceIns.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight - 100) element.classList.add('visible');
    });

    // Contact Form Submission
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! (I haven\'t connected to backend yet.)');
        e.target.reset();
    });

    // Vanilla Tilt for 3D Effects
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5
    });

    // Nebula Background
    const canvas = document.getElementById('nebula-bg');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * 100,
            size: Math.random() * 2 + 1,
            speed: Math.random() * 0.5 + 0.1
        });
    }
    function animateNebula() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.z -= p.speed;
            if (p.z <= 0) p.z = 100;
            const scale = 100 / (100 - p.z);
            const x = (p.x - canvas.width / 2) * scale + canvas.width / 2;
            const y = (p.y - canvas.height / 2) * scale + canvas.height / 2;
            ctx.beginPath();
            ctx.arc(x, y, p.size * scale, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 212, 255, ${scale / 2})`;
            ctx.fill();
        });
        requestAnimationFrame(animateNebula);
    }
    animateNebula();
});

// Scroll Progress
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progress-bar').style.width = scrollPercent + '%';
});

// Back-to-Top
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 300);
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});