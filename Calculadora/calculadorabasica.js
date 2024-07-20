//1 el usuario debe djitar 2 numeros $
//2 el usuario debe digitar la operci}on que sea (suma,resta,divison,multiplicacion) $
//3 de acuerdo a la operacion se pondra el resultado en el cuerpo del html o parrafo $
//4 comprobar que el usuario dijite entre las opciones de basicas de matematicas abra un error con un alert que mal opcion no correcta
//5 para la division si el segundo numero dijitado es menor o igual a 0 saque un error en un alert que dija no se pude utilizar un cero
document.getElementById("escribe").innerText ="soy tu operacion";
let number1 = parseInt(prompt("digite el primer numero porfavor 😁"));
let number2  = parseInt(prompt("digite el segundo numero numero porfavor 😁"));
let operacion = prompt("porfavor digite un operacion entre suma,resta,multiplicacion,division y raiz cuadrada");
let resultado = 0;
let simbolo = "➕" 
if(operacion === "suma" || operacion === "resta" || operacion === "multiplicacion" || operacion === "division" || operacion === "raiz cuadrada"){
    if(operacion === "suma" ){
        resultado = number1 + number2;
        simbolo = "➕"; 
    }   
    else if(operacion === "resta"){
        resultado = number1 - number2;
        simbolo = "➖";
    }
    else if(operacion === "multiplicacion"){
        resultado = number1 * number2;
        simbolo = "✖";
    }
    else if(operacion === "division"){
        if(number2 === 0){
            alert("no se puede utilizar cero 🙃")
        }
        else{
         resultado = number1 / number2;
         simbolo = "➗"; 
        }
    }
    else{
        resultado = Math.sqrt(number1); 
        simbolo = "〰";
    }
} 
else { 
    alert("es no es ninguna operacion matematica 🤨")  
}  
document.getElementById("escribe").innerText = `el resultado de la operacion ${operacion} ${simbolo} es ${resultado}  `; 
