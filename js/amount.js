var num = 1;
var numElement = document.getElementById("numero");

function aumentar() {
  num++;
  numElement.innerText = num;
}

function disminuir() {
  if(num >= 2){
    num--;
    numElement.innerText = num;
  }
}
