// Get HTML elements
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");
const colorOutput = document.getElementById("color-output");

// Render HTML
function setBackgroundColor() {
  let red = redSlider.value;
  let green = greenSlider.value;
  let blue = blueSlider.value;
  let color = "rgb(" + red + ", " + green + ", " + blue + ")";
  colorOutput.textContent = color;
  document.body.style.backgroundColor = color;
}

// Event Listener
document.addEventListener("input", setBackgroundColor);
