var colorPicker;
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
  colorPicker = document.querySelector("#colorPicker");
  colorPicker.value = defaultColor;

  colorPicker.addEventListener("input", updateFirst, false);
  colorPicker.addEventListener("change", watchColorPicker, false);
}

function updateFirst(event) {
  var p = document.querySelector("p");
  
  if (p) {
    p.style.color = event.target.value;
  }
}

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}
