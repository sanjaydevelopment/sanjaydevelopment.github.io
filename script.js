// Matrix Background Effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Characters for the Matrix effect (including some code-like symbols)
const chars = '01{}$[]<>/;:=+-*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

// Initialize drops array
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    // Semi-transparent black to create fading effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Green text
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    // Loop through drops
    for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars.charAt(Math.floor(Math.random() * chars.length));

        // Draw character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top when it reaches the bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Increment drop position
        drops[i]++;
    }
}

// Run animation
setInterval(draw, 33);

// Handle window resize
window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

// Scroll reveal for content
const reveals = document.querySelectorAll('.reveal, .skill-item, .project-item, .cert-item');

function revealOnScroll() {
    reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight - 50) {
            el.classList.add('show');
        }
    });
}

// Run on scroll and initial load
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
