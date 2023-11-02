const sliders = document.querySelectorAll(".image-track");

sliders.forEach((slider) => {
  const btnLeft = slider.parentNode.querySelector('.left');
  const btnRight = slider.parentNode.querySelector('.right');
  
  btnLeft.addEventListener('click', () => {
    let left = slider.scrollLeft;
    slider.scroll({
      top: 0,
      left: left-300,
      behavior: "smooth",
    });
  })
  btnRight.addEventListener('click', () => {
    let left = slider.scrollLeft;
    slider.scroll({
      top: 0,
      left: left+300,
      behavior: "smooth",
    });
  })
});
