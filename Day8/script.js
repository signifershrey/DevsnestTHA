const whitePixels = [
  129, 130, 148, 149, 150, 151, 167, 168, 169, 170, 171, 172, 186, 187, 189,
  190, 192, 193, 206, 207, 208, 209, 210, 211, 212, 213, 228, 231, 247, 249,
  250, 252, 266, 268, 271, 273,
];

function makepixel(i) {
  var pixel = document.createElement("div");
  if (whitePixels.includes(i)) {
    pixel.classList.add("white");
  } else pixel.classList.add("red");
  return pixel;
}

var container = document.querySelector(".container");
for (let i = 0; i < 400; i++) {
  container.appendChild(makepixel(i));
}

container.addEventListener("click", doTask);

function doTask(e) {
//   console.log(e);
    var pixelClass = e.target.className;
    
//   console.log(pixelClass);
  if (pixelClass == "red") {
    e.target.classList.remove("red");
    e.target.classList.add("white");
    console.log(e.target);
  } else {
    e.target.classList.remove("white");
      e.target.classList.add("red");
      console.log(e.target);
  }
}
