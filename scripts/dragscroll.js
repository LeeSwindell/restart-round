let mouseDown = false;
let startX, scrollLeft;
let slider;

const sliders = document.querySelectorAll('.image-track');

const startDragging = (e) => {
  slider = e.currentTarget;
  mouseDown = true;

  if (e.type === 'touchstart') {
    startX = e.touches[0].pageX - slider.offsetLeft;
  } else if (e.type === 'mousedown') {
    startX = e.pageX - slider.offsetLeft;
  }

  // startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft
}

const stopDragging = () => {
  mouseDown = false;
}

const move = (e) => {
  e.preventDefault();
  if (!mouseDown) return;

  let x;

  if (e.type === 'touchmove') {
    x = e.touches[0].pageX - slider.offsetLeft;
  } else if (e.type === 'mousemove') {
    x = e.pageX - slider.offsetLeft;
  }

  // const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
}

// Add the event listeners
sliders.forEach((slider) => {
  slider.addEventListener('touchstart', startDragging, false);
  slider.addEventListener('touchend', stopDragging, false);
  slider.addEventListener('touchmove', move, false);
  
  slider.addEventListener('mousemove', move, false);
  slider.addEventListener('mousedown', startDragging, false);
  slider.addEventListener('mouseup', stopDragging, false);
  slider.addEventListener('mouseleave', stopDragging, false);
});
