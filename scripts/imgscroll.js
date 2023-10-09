const containers = document.getElementsByClassName("game-container");

[...containers].forEach(container => {
  const images = container.querySelectorAll(".image");
  const btnLeft = container.querySelector('.left');
  const btnRight = container.querySelector('.right');
  

  btnLeft.addEventListener('click', () => {
    scrollLeft(images)
  })
  btnRight.addEventListener('click', () => {
    scrollRight(images)
  })
});

function scrollLeft(images) {
  const image = images[0];

  const imgLeft = image.offsetLeft;
  const containerLeft = image.parentElement.offsetLeft;

  anime({
    targets: images,
    translateX: Math.min(400, containerLeft-imgLeft)
  })
}

function scrollRight(images) {
  const image = images[images.length-1];
  const imgRight = image.offsetLeft + 200;
  const containerRight = image.parentElement.offsetLeft+image.parentElement.offsetWidth;
  anime({
    targets: images,
    translateX: Math.min(400, containerRight-imgRight)
  })
}