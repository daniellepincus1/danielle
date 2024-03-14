/* add your JavaScript code here! */
document.addEventListener('DOMContentLoaded', function () {
console.log ('Hello DOM');

let myButton = document.getElementById('btn-mode');

myButton.addEventListener('click', function(){ 
let myBody = document.querySelector('body');

myBody.classList.toggle('darkmode');
console.log ("Hooray! Its Toggled")
});
});