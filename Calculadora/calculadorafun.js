/*function sum() {
   let number1 = parseInt(document.getElementById("number1").value);
   let number2 = parseInt(document.getElementById("number2").value);
   let result = number1 + number2;
   document.getElementById("resultado").innerHTML = result;   
}
function res() {
   let number1 = parseInt(document.getElementById("number1").value);
   let number2 = parseInt(document.getElementById("number2").value);
   document.getElementById("resultado").innerHTML = number1 - number2;
}
function mul(){
    let number1 = parseInt(document.getElementById("number1").value);
   let number2 = parseInt(document.getElementById("number2").value);
   document.getElementById("resultado").innerHTML = number1 * number2;
}
function divi(){
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    if (number2 === 0){
       return  
    }
    document.getElementById("resultado").innerHTML = number1 / number2;
}*/ 
let number1 = 0;
let number2 = 0;
function inicializar(){
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
}   
function sum() {
   inicializar();
    let result = number1 + number2;
    document.getElementById("resultado").innerHTML = result;   
 }
 function res() {
    inicializar();
    document.getElementById("resultado").innerHTML = number1 - number2;
 }
 function mul(){
      inicializar();  
    document.getElementById("resultado").innerHTML = number1 * number2;
 }
 function divi(){
     inicializar();
     if (number2 === 0){
        return  
     }
     document.getElementById("resultado").innerHTML = number1 / number2;
 }