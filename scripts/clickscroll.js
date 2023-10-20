const tracks = document.querySelectorAll(".image-track");

tracks.forEach((track) => {
  const btnLeft = track.parentNode.querySelector('.left');
  const btnRight = track.parentNode.querySelector('.right');
  
  btnLeft.addEventListener('click', () => {
    let left = track.scrollLeft;
    track.scroll({
      top: 0,
      left: left-300,
      behavior: "smooth",
    });
  })
  btnRight.addEventListener('click', () => {
    let left = track.scrollLeft;
    track.scroll({
      top: 0,
      left: left+300,
      behavior: "smooth",
    });
  })
});
