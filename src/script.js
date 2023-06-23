const text = "Thiunuwan";
const span = document.getElementById("typewriter");
let index = 0;

function type() {
  span.textContent += text.charAt(index);
  index++;
  if (index >= text.length) {
    index = 0;
    span.textContent = "";
  }
  setTimeout(type, 500);
}

type();