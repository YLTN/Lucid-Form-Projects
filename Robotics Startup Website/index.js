let evenHeaderShapes = document.querySelectorAll('#shapes-container > div:nth-child(even)');
let oddHeaderShapes = document.querySelectorAll('#shapes-container > div:nth-child(odd)');

let starsContainer = document.getElementById('stars-container');
for (let i = 0; i < 50; i++) {
    let star = document.createElement('div');
    star.classList.add('star');
    starsContainer.appendChild(star);
}

let stars = document.querySelectorAll('.star');

document.addEventListener('DOMContentLoaded', e => {

    evenHeaderShapes.forEach(i => {
        i.dataset.initTrans = i.style.transform;
    });

    oddHeaderShapes.forEach(i => {
        i.dataset.initTrans = i.style.transform;
    });

    stars.forEach(i => {
        i.style.transform = `rotate(${Math.random() * 360}deg)`;
        i.dataset.initTrans = i.style.transform;
        i.style.top = Math.random() * 500 + 50 + 'px';
        i.style.left = Math.random() * 1400 + 'px';
    })
});

window.addEventListener('mousemove', e => {
    evenHeaderShapes.forEach(i => {
        i.animate({
            transform: i.dataset.initTrans + ` translate(${-e.clientX * 0.01}%, ${e.clientY * 0.01}%)`
        }, {duration: 0, iterations: 1, fill: 'forwards'})
    });

    oddHeaderShapes.forEach(i => {
        i.animate({
            transform: i.dataset.initTrans + ` translate(${e.clientX * 0.01}%, ${-e.clientY * 0.01}%)`
        }, {duration: 0, iterations: 1, fill: 'forwards'})
    });

    stars.forEach(i => {
        i.animate({
            transform: i.dataset.initTrans + ` translate(${e.clientX * 0.01}%, ${e.clientY * 0.01}%)`
        }, {duration: 0, iterations: 1, fill: 'forwards'})
    })
});