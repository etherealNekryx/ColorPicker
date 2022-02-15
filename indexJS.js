
function calculate() {
  var R = document.getElementById("Rinput").value;
  var G = document.getElementById("Ginput").value;
  var B = document.getElementById("Binput").value;
  var Rval = document.getElementById("Rval");
  var Gval = document.getElementById("Gval");
  var Bval = document.getElementById("Bval");
  var currentColor = "rgb(" + R + ", " + G + ", " + B + ")";
  
  var RGB = +R + +G + +B;
  
  var r = ((1 / RGB) * R).toFixed(3);
  var g = ((1 / RGB) * G).toFixed(3);
  var b = ((1 / RGB) * B).toFixed(3);
  
  Rval.innerHTML = r;
  Gval.innerHTML = g;
  Bval.innerHTML = b;
  
  document.getElementById("colorDisplay").style.backgroundColor = currentColor;
  
}