//hacer la variable para edad.
//agregrar lo de las edades de 0 a 50
//usar mayor y menor y el Y y O
//si el numero es mayor a 0 Y el numero es menor a 15 se va imprimir un parrafo que dija eres un niño,
// si el numero es mayor e igual a 15 Y menor 25  se imprimira eres joven,
// si es numero es mayor e igual a 25 Y nemor a 50 se imprimra ers adulto,
// si es numero es mayor e igual a 50 imprimira eres viejo.  
let edad = parseInt(prompt("Escribe tu edad"));
// forma 1
/*if(edad > 0 && edad < 15 ){
   console.log("eres un niño");
}
if(edad >= 15 && edad < 25){
  console.log(" eres joven");  
}   
if(edad >= 25 && edad < 50){
   console.log("eres adulto"); 
}
if(edad >= 50){
  console.log("eres viejo");  
}*/
// forma 2    
/*if(edad > 0 && edad < 15 ){
    console.log("eres un niño");
    document.getElementById("letrero").innerText = "eres un niño";
 }
 else if(edad >= 15 && edad < 25){
   console.log(" eres joven");
   document.getElementById("letrero").innerText  =  "eres un joven";
 }   
 else if(edad >= 25 && edad < 50){
    console.log("eres adulto");
    document.getElementById("letrero").innerText = "eres un adulto" 
 }
 else {
   console.log("eres viejo");
   document.getElementById("letrero").innerText  = "eres un viejo";  
 }    
 */
  let resultado = "el tiempo";

 if(edad > 0 && edad < 15 ){
    console.log("eres un niño");
    resultado = "eres un niño";
 }
 else if(edad >= 15 && edad < 25){
   console.log(" eres joven");
   resultado =  "eres un joven";
 }   
 else if(edad >= 25 && edad < 50){
    console.log("eres adulto");
    resultado  = "eres un adulto" 
 }
 else {
   console.log("eres viejo");
   resultado = "eres un viejo";  
 }  
 document.getElementById("letrero").innerText = resultado;  
