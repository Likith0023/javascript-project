'use strict';
var colors = ['white','green','blue','red','violet','yellow'];
var len = colors.length-1;

var buttonconrole=document.getElementById('btn1');
var spancontrole=document.querySelector('.color');

buttonconrole.addEventListener('click',() => {
var index=generatera();
document.body.style.backgroundColor=colors[index];
spancontrole.textContent=colors[index];
})
function generatera()
{
 return Math.round(Math.random() * len);
}