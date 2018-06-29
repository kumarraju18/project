var popup = document.getElementById('Pop1');

var btn = document.getElementById("Btn");

var exit = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    popup.style.display = "block";
}

exit.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
 
document.onkeydown = function (event) {
  if (event.keyCode == 27) 
   popup.style.display = "none";
 }