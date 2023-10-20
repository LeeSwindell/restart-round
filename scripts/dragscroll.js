let mouseDown = false;
let startX, scrollLeft;
let slider;

const sliders = document.querySelectorAll('.image-track');

const startDragging = (e) => {
  slider = e.currentTarget;
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft
}

const stopDragging = () => {
  mouseDown = false;
}

const move = (e) => {
  e.preventDefault();
  if (!mouseDown) return;
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
}

// Add the event listeners
sliders.forEach((slider) => {
  slider.addEventListener('mousemove', move, false);
  slider.addEventListener('mousedown', startDragging, false);
  slider.addEventListener('mouseup', stopDragging, false);
  slider.addEventListener('mouseleave', stopDragging, false);
});
