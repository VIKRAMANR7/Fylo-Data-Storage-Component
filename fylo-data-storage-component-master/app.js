var slider = document.getElementById("myRange");
var output = document.getElementById("currentVal");
var newVal = document.getElementById("remain");

output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
  var input = this.value;
  valPercent = (input / 1000) * 100;
  slider.style.background = `linear-gradient(to right, hsl(6, 100%, 80%),hsl(335, 100%, 65%) ${valPercent}%, hsl(229, 57%, 11%)${valPercent}%)`;
  newVal.innerHTML = 1000 - this.value;
};
