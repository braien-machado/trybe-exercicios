let body = document.querySelector('body');
let pContainer = document.querySelector('#paragraph-container');
let inputBGColor = document.querySelector('#backgroundColor');
let inputColor = document.querySelector('#color');
let inputFontSize = document.querySelector('#fontSize');
let inputLineHeight = document.querySelector('#lineHeight');
let inputFontFamily = document.querySelector('#fontFamily');

function changeBGColor(event) {
  body.style.backgroundColor = inputBGColor.value;
}

inputBGColor.addEventListener('keyup', changeBGColor);
