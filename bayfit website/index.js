let header = document.querySelector('header');

// document.addEventListener('DOMContentLoaded', e => {
//     let currentPage = document.querySelector('body').dataset.page;
//     let currentNavBtn  = document.querySelector('.navbtn[data-' + currentPage + ']');
//     currentNavBtn.style.color = 'black';
//     currentNavBtn.style.fontWeight = 500;
//     currentNavBtn.addEventListener('hover', e => {
//         currentNavBtn.style.color = 'var(--main-red)';
//         currentNavBtn.style.fontWeight = 300;
//     })
// });

window.addEventListener('mousemove', e => {
    header.style.backgroundPositionX = (-e.clientX + window.scrollX) * 0.1 + 20 + 'px';
    header.style.backgroundPositionY = (-e.clientY + window.scrollY) * 0.1 + 20 + 'px';
});