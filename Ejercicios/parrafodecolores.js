// si el usuario  dijita red O blue 0 yellow cambiara el color del parrafo SI NO ,pondra un texto que dira pusiste una opcion incorrecta
alert("Hola,que gusto hoy vamos a escoger un color");
let color = prompt("Escribe por favor entres estos colores:red,blue,yellow");
if(color === "red" || color === "blue" || color === "yellow"){
 document.getElementById("escribe").style.color=color;
}
 else {
document.getElementById("escribe").innerText ="es una opcion incorrecta 😂 ";  
 }
 

 







    


