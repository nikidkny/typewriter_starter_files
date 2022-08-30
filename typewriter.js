"use strict";
window.addEventListener("DOMContentLoaded", init);
let i = 0;
const text = document.querySelector(".typewritten").innerHTML;
document.querySelector("#typewriter").innerHTML = " ";
console.log(text);

function init() {
  loop();
}
function loop() {
  const charNum = text.length;
  console.log();
  //   console.log(charNum);
  let counter = charNum;
  if (i < counter) {
    document.querySelector("#typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(loop, 100);
  }
  console.log(text);
}
