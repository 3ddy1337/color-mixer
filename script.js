// Get HTML elements
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");
const colorOutput = document.getElementById("color-output");
const button = document.getElementById("button");

// Render HTML
function setBackgroundColor() {
  let color =
    "rgb(" +
    redSlider.value +
    ", " +
    greenSlider.value +
    ", " +
    blueSlider.value +
    ")";
  colorOutput.textContent = color;
  document.body.style.backgroundColor = color;
}

function setRandomColor() {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })

    .then((data) => {
      const randomColor =
        "rgb(" + data.rgb.r + ", " + data.rgb.g + ", " + data.rgb.b + ")";
      colorOutput.textContent = randomColor;
      document.body.style.backgroundColor = randomColor;
      redSlider.value = data.rgb.r;
      greenSlider.value = data.rgb.g;
      blueSlider.value = data.rgb.b;
    });
}

// Event Listener
document.addEventListener("input", setBackgroundColor);
button.addEventListener("click", setRandomColor);
