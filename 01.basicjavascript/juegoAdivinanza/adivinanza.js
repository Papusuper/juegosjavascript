//1.Solicitar al gamer un numero entre 1-10.
//2.Guardar lo que el gamer puso en una variable.
//3.Anotar el numero ganador con una  varibale.
//4.Mirar si el numero que dijo el gamer es correcto.
//5.Mostrarle al gamer si el numero es correcto.
//6.solo me debe acerptar un numero entre uno y diez si no es un nuemro entre  1 o 10 mostrara el mesaje de error(TAREA).
//7.Si la conparacion es igual a falso mostrara el mensaje perdiste(game over),si no el mensaje de ganaste(win).
//8.meter mas jugadores hasta que encuentren el numero.  
let numeroSolicitado = parseInt(prompt("Hola,escoge un numero entre 1y3"));
let numberWin = Math.floor(Math.random()*3)+1;
let ganaste = numeroSolicitado === numberWin;
let resultado = "perdiste";
if(ganaste === true){ 
   resultado = "ganaste"; 
}


alert(`Este es el numero ganador ${numberWin} y este es el tuyo:${numeroSolicitado} este es resultado:${resultado}`);
//let bodyElement = document.body;
//console.log(bodyElement);
//Pues lo que hicimos fue cambiar el html de el body en adivinanza y cogimos el elemento basados en el id y lo modificamos con inner el texto.
document.getElementById("letrero").innerHTML = `Este es el numero ganador ${numberWin} y este es el tuyo:${numeroSolicitado} este es el resultado:${resultado}`;

