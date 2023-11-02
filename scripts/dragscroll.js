const sliders = document.querySelectorAll('.image-track');
let isDown = false;
let startX;
let scrollLeft;

var momentumData = new Map(); // Store momentum data for each slider

sliders.forEach((slider) => {
  momentumData.set(slider, {
    velX: 0,
    momentumID: null
  });

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('image-track-dragging');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    cancelMomentumTracking(slider);
  });

  slider.addEventListener('touchstart', (e) => {
    isDown = true;
    slider.classList.add('image-track-dragging');
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    cancelMomentumTracking(slider);
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('image-track-dragging');
    beginMomentumTracking(slider);
  });

  slider.addEventListener('touchend', () => {
    isDown = false;
    slider.classList.remove('image-track-dragging');
    beginMomentumTracking(slider);
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX);
    const prevScrollLeft = slider.scrollLeft;
    slider.scrollLeft = scrollLeft - walk;
    momentumData.get(slider).velX = slider.scrollLeft - prevScrollLeft;
  });

  slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX);
    const prevScrollLeft = slider.scrollLeft;
    slider.scrollLeft = scrollLeft - walk;
    momentumData.get(slider).velX = slider.scrollLeft - prevScrollLeft;
  });

  slider.addEventListener('wheel', (e) => {
    cancelMomentumTracking(slider);
  });
});

function beginMomentumTracking(slider) {
  cancelMomentumTracking(slider);
  momentumData.get(slider).momentumID = requestAnimationFrame(() => momentumLoop(slider));
}

function cancelMomentumTracking(slider) {
  const momentumInfo = momentumData.get(slider);
  if (momentumInfo.momentumID) {
    cancelAnimationFrame(momentumInfo.momentumID);
    momentumInfo.momentumID = null;
  }
}

function momentumLoop(slider) {
  const momentumInfo = momentumData.get(slider);
  slider.scrollLeft += momentumInfo.velX;
  momentumInfo.velX *= 0.90;
  if (Math.abs(momentumInfo.velX) > 0.5) {
    momentumInfo.momentumID = requestAnimationFrame(() => momentumLoop(slider));
  }
}