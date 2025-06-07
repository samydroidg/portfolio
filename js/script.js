const faders = document.querySelectorAll('.fade-in');

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