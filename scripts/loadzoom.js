const tracks = document.getElementsByClassName("image-track");
const gameContainers = document.getElementsByClassName("game-container");

console.log(gameContainers);
let images = [];

[...tracks].forEach(track => {
  images = images + track.querySelectorAll(".image");
  // const images = track.querySelectorAll(".image");

  const screenWidth = window.screen.width;
  const pos = track.offsetLeft
  console.log(screenWidth);
  const translateVal = screenWidth-pos;

});

// anime({
//   targets: [gameContainers],
//   translateX: -2000,
//   duration: 2500,
//   direction: 'reverse',
//   easing: 'linear'
// });

anime({
  targets: images,
  translateX: 200,
  opacity: .5,
  duration: 500,
  delay: anime.stagger(100, {start: 2000})
})