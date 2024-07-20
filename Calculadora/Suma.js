console.log("Hola,señor");
let saludo = prompt("Escoge un nombre por favor");
alert(`Bien ahora encoge un numero ${saludo}`);
let number1 = parseInt(prompt("digite el primer numero por favor:)"));
let number2 = parseInt(prompt("digite el segundo numero por favor:)"));
alert (`La suma es ${number1+number2}`);
let despedida = prompt("gracias, pon una calificacion sobre esta calculadora");
console.log("Adios,señor:)");
document.getElementById("letrero").innerHTML = `Este es el primer numero ${number1} y este es el segundo:${number2} y esta es la suma:${number1+number2}`