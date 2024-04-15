// Get HTML elements
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");
const colorOutput = document.getElementById("color-output");
const button = document.getElementById("button");

// Render HTML
function setBackgroundColor() {
  let red = redSlider.value;
  let green = greenSlider.value;
  let blue = blueSlider.value;
  let color = "rgb(" + red + ", " + green + ", " + blue + ")";
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
      const r = data.rgb.r;
      const g = data.rgb.g;
      const b = data.rgb.b;
      const randomColor = "rgb(" + r + ", " + g + ", " + b + ")";
      colorOutput.textContent = randomColor;
      document.body.style.backgroundColor = randomColor;
      redSlider.setAttribute("value", r);
      greenSlider.setAttribute("value", g);
      blueSlider.setAttribute("value", b);
    });
}

// Event Listener
document.addEventListener("input", setBackgroundColor);
button.addEventListener("click", setRandomColor);
