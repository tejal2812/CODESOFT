// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing effect for tagline
const tagline = document.querySelector('.tagline');
const text = tagline.textContent;
tagline.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        tagline.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect when page loads
window.onload = typeWriter;

// Skill animation on scroll
const skills = document.querySelectorAll('.skill');
window.addEventListener('scroll', () => {
    skills.forEach(skill => {
        const skillPosition = skill.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (skillPosition < screenPosition) {
            skill.style.animation = 'slideIn 0.5s ease forwards';
        }
    });
});

// Project hover effect
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'translateY(-10px)';
        project.style.transition = 'transform 0.3s ease';
    });
    
    project.addEventListener('mouseleave', () => {
        project.style.transform = 'translateY(0)';
    });
});