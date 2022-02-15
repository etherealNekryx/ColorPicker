
function calculate() {
  var R = document.getElementById("Rinput").value;
  var G = document.getElementById("Ginput").value;
  var B = document.getElementById("Binput").value;
  
  var RGB = R + G + B;
  
  var r = (1 / RGB) * R;
  var g = (1 / RGB) * G;
  var b = (1 / RGB) * B;
  
  var Rval = document.getElementById("Rval");
  var Gval = document.getElementById("Gval");
  var Bval = document.getElementById("Bval");
  
  Rval.innHTML = r;
  Gval.innerHTML = g;
  Bval.innerHTML = b;
  
  
}