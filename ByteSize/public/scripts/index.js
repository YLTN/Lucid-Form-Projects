let faqCarouselBtn = document.getElementsByClassName('faq-carousel-btn');

Array.from(faqCarouselBtn).forEach(element => {
  element.addEventListener('click', (e) => {
    let btnTextId = element.dataset.textId;
    let faqContent = document.getElementById('faq-text-' + btnTextId);
    let defilated = faqContent.dataset.defilated;
    let finalHeight = faqContent.querySelector('.faq-text').clientHeight + 30 + 'px';
    let arrow = element.querySelector('span:nth-child(2)');
    faqContent.animate([{
      height: defilated == 'false' ? '0px' : finalHeight
    },
    {
      height: defilated == 'false' ? finalHeight : '0px'
    }], {
      duration: 350,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
    arrow.animate([{
      rotate: defilated == 'false' ? '0deg' : '180deg'
    },
    {
      rotate: defilated == 'false' ? '180deg' : '0deg'
    }], {
      duration: 350,
      easing: 'ease-in-out',
      fill: 'forwards'
    })
    faqContent.dataset.defilated = defilated == 'true' ? 'false' : 'true';
  });
});