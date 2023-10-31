// let mouseDown = false;
// let startX, scrollLeft;
// let slider;

// const sliders = document.querySelectorAll('.image-track');

// const startDragging = (e) => {
//   slider = e.currentTarget;
//   mouseDown = true;

//   if (e.type === 'touchstart') {
//     startX = e.touches[0].pageX - slider.offsetLeft;
//   } else if (e.type === 'mousedown') {
//     startX = e.pageX - slider.offsetLeft;
//   }

//   // startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft
// }

// const stopDragging = () => {
//   mouseDown = false;
// }

// const move = (e) => {
//   e.preventDefault();
//   if (!mouseDown) return;

//   let x;

//   if (e.type === 'touchmove') {
//     x = e.touches[0].pageX - slider.offsetLeft;
//   } else if (e.type === 'mousemove') {
//     x = e.pageX - slider.offsetLeft;
//   }

//   // const x = e.pageX - slider.offsetLeft;
//   const scroll = x - startX;
//   slider.scrollLeft = scrollLeft - scroll;
// }

// // Add the event listeners
// sliders.forEach((slider) => {
//   slider.addEventListener('touchstart', startDragging, false);
//   slider.addEventListener('touchend', stopDragging, false);
//   slider.addEventListener('touchmove', move, false);
  
//   slider.addEventListener('mousemove', move, false);
//   slider.addEventListener('mousedown', startDragging, false);
//   slider.addEventListener('mouseup', stopDragging, false);
//   slider.addEventListener('mouseleave', stopDragging, false);
// });



const sliders = document.querySelectorAll('.image-track');
let isDown = false;
let startX;
let scrollLeft;

// // Momentum 
// var velX = 0;
// var momentumID;
var momentumData = new Map(); // Store momentum data for each slider

sliders.forEach((slider) => {
  momentumData.set(slider, {
    velX: 0,
    momentumID: null
  });

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('image-track-dragging')
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    cancelMomentumTracking(slider);
  });

  slider.addEventListener('touchstart',(e) => {
    isDown = true;
    slider.classList.add('image-track-dragging')
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    cancelMomentumTracking(slider);
  })
  
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  
  
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('image-track-dragging');
    beginMomentumTracking(slider);
  });

  slider.addEventListener('touchend', (e) => {
    isDown = false;
    slider.classList.remove('image-track-dragging');
    beginMomentumTracking(slider);
  });
  
  
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX); //scroll-fast
    var prevScrollLeft = slider.scrollLeft;
    slider.scrollLeft = scrollLeft - walk;
    momentumData.get(slider).velX = slider.scrollLeft - prevScrollLeft;
  });

  slider.addEventListener('touchmove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    var prevScrollLeft = slider.scrollLeft;
    slider.scrollLeft = scrollLeft - walk;
    momentumData.get(slider).velX = slider.scrollLeft - prevScrollLeft;
  });

  slider.addEventListener('wheel', (e) => {
    cancelMomentumTracking(slider);
  });  
})


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