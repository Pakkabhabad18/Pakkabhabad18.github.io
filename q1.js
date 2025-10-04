// --- Typewriter Effect ---
document.addEventListener("DOMContentLoaded", function() {
    const roles = ["Product Designer", "Data Scientist", "Tech Enthusiast"];
    let roleIndex = 0;
    let charIndex = 0;
    const typewriterElement = document.querySelector(".typewriter");

    function type() {
        if (!typewriterElement) return;
        if (charIndex < roles[roleIndex].length) {
            typewriterElement.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typewriterElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500);
        }
    }

    if (typewriterElement) {
        type();
    }
});

// --- Dynamic Fade-in on Scroll ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));