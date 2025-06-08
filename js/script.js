const faders = document.querySelectorAll('.fade-in');
const themeToggle = document.getElementById('theme-toggle');
const buttons = document.querySelectorAll('.btn');
const hoverSound = new Audio('sound/button.mp3');
const email = document.getElementById('email');

document.addEventListener("DOMContentLoaded", function(){
    const heading = document.querySelector('h1');
    const text = "Hello! I'm Bittu";
    let index = 0;

    function typeEffect(){
        if(index < text.length){
            heading.textContent += text.charAt(index);
            index ++;

            setTimeout(typeEffect, 100);
        }
    }

    heading.textContent = "";
    typeEffect();
})

function showOnScroll() {
    faders.forEach(e1 => {
        const rect = e1.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            e1.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });
});

email.addEventListener('click', () => {
    navigator.clipboard.writeText("gouravojha.2005@gmail.com").then(() => alert("Email copied to clipboard!")).catch(()=> alert("Failed to copy email!"));
});

document.addEventListener('mousemove', e => {
    const dot = document.createElement('div');
    dot.classList.add('cursor-dot');
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    document.body.appendChild(dot);

    setTimeout(() => dot.remove(), 200);
});