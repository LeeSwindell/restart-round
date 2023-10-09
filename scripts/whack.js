document.addEventListener("click", function(event) {
  let ele = event.target;
  if (ele.classList.contains('destructible')) {

    let rect = ele.getBoundingClientRect();

    // Calculate the absolute position by adding the current scroll position
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    let absoluteTop = rect.top + scrollTop;
    let absoluteLeft = rect.left + scrollLeft;

    ele.style.position = "absolute";
    ele.style.top = absoluteTop+"px";
    ele.style.left = absoluteLeft+"px";
    ele.style.zIndex = 99;

    let width = window.innerWidth; 
    let height = window.innerHeight; 

    let randomX = Math.random() * 2 - 1;
    randomX = randomX > 0 ? width * (randomX + 1) : width * (randomX - 1); 
    let randomY = Math.random() * 2 - 1;
    randomY = randomY > 0 ? height * (randomY + 1) : height * (randomY - 1); 

    anime({
      targets: ele,
      translateX: randomX,
      translateY: randomY,
      rotate: 1200,
      duration: 8000,
      direction: 'forward',
    });
    

    setTimeout(RemoveElement, 3000, ele);
  }
});

function RemoveElement(ele) {
  ele.remove();
}
