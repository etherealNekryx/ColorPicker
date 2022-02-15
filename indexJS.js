var R;
var G;
var B;
var r;
var g;
var b;
var Rval;
var Gval;
var Bval;
var RGB;


function calcualte() {
  R = document.getElementById("Rinput").value;
  G = document.getElementById("Ginput").value;
  B = document.getElementById("Binput").value;
  
  RGB = R + G + B;
  
  r = (1 / RGB) * R;
  g = (1 / RGB) * G;
  b = (1 / RGB) * B;
  
  Rval = document.getElementById("Rval");
  Gval = document.getElementById("Gval");
  Bval = document.getElementById("Bval");
  
  Rval.innHTML = r;
  Gval.innerHTML = g;
  Bval.innerHTML = b;
  
  
}