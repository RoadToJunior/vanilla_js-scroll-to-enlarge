const square = document.createElement("div");

document.body.appendChild(square);

let size = 100;
let grow = true; //flag

square.style.width = size + "px";
square.style.height = size + "px";

document.addEventListener("scroll", function () {
  if (size >= window.innerWidth / 2) {
    grow = !grow;
  } else if (size === 0) {
    grow = !grow;
  }

  if (grow === true) {
    size += 5;
    square.style.width = size + "px";
    square.style.height = size + "px";
  } else {
    size -= 5;
    square.style.width = size + "px";
    square.style.height = size + "px";
  }
});
