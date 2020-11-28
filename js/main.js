let container = document.querySelector(".container");
let objekte = document.querySelectorAll(".objekt");
let randomX;
let randomY;
let prevDivs = [];
let size = 200;
let overlap = 50;
let n = 0;

objekte.forEach((elem) => {
  elem.style.width = size + "px";
  elem.style.height = size + "px";
});

neuAnordnen();
container.addEventListener("mousemove", () => {
  if (n % 20 == 0) {
    neuAnordnen();
  }
  n++
});

function neuAnordnen() {
  prevDivs = [];

  for (let i = 0; i < objekte.length; i++) {
    setPos(objekte[i]);

    prevDivs.forEach((elem) => {
      is_colliding;
    });
    prevDivs.push(objekte[i]);
    console.log(prevDivs);
  }
}

function setPos(objekt) {
  randomX = Math.floor(Math.random() * (window.innerWidth - size));
  randomY = Math.floor(Math.random() * (window.innerHeight - size));
  objekt.style.left = randomX + "px";
  objekt.style.top = randomY + "px";

  prevDivs.forEach((elem) => {
    if (is_colliding(objekt, elem)) {
      setPos(objekt);
    }
  });
}

function is_colliding(div1, div2) {
  // Div 1 data
  var d1_offset = div1.getBoundingClientRect();
  var d1_height = d1_offset.height - overlap * 2;
  var d1_width = d1_offset.width - overlap * 2;
  var d1_distance_from_top = d1_offset.top + d1_height + overlap;
  var d1_distance_from_left = d1_offset.left + d1_width + overlap;

  // Div 2 data
  var d2_offset = div2.getBoundingClientRect();
  var d2_height = d2_offset.height - overlap * 2;
  var d2_width = d2_offset.width - overlap * 2;
  var d2_distance_from_top = d2_offset.top + d2_height + overlap;
  var d2_distance_from_left = d2_offset.left + d2_width + overlap;

  var not_colliding =
    d1_distance_from_top < d2_offset.top ||
    d1_offset.top > d2_distance_from_top ||
    d1_distance_from_left < d2_offset.left ||
    d1_offset.left > d2_distance_from_left;

  // Return whether it IS colliding
  return !not_colliding;
}
