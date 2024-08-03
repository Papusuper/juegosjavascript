/*
aqui aprendi a declarar variables 
y alertar 
y usar la consola del explorador 
y el tipo de variables
*/
//vamos a mirar todos los metods de string y los de fecha.
//tarea mover todo lo que tenga expresiones,cambiar hola a declaracion de variables.$
//hacer una carpeta llmada bases y mover todo lo de expresiones y hola.$
//mover parrafos de colores a una carpeta llamada ejercicios.$
//y una ultima carpeta para todo lo que tenga que ver con calculadora.$
// mover condicionales  a la carpeta bases.
//(tarea) hacer un programa que se llame calculadora basica $



const PI=3.14
let name ="samuel"; 
let age =  15;
let isBoy=true;
let fechaCumpleanos = new Date(2008,7,29); 
let birthday = new Date("December 17, 1995 03:24:00");
let birthday2 = new Date("1995-12-17T03:24:00");
let fechaAltual = new Date(Date.now());
let array = [1,2,3,4,5,6,7,8,9,10]
let array2 = ["hola","como","estas","lucia",array,45]
console.log("my name is "+name+" age "+age+" is Boy "+isBoy );
console.log(`my name is ${name} age ${age} is Boy ${isBoy}` );
console.log(typeof name );
console.log(typeof age);
console.log(typeof isBoy);
console.log(typeof PI);
console.log(typeof fechaCumpleanos);
console.log(typeof birthday);
console.log(typeof birthday2);
console.log(typeof fechaAltual); 
console.info("hola esto es una informcion");
console.warn("hola esto es una alerta");
console.error("hola esto es un error");
console.info(fechaCumpleanos);
console.log(birthday);
console.log(birthday2);
console.log(fechaAltual);
console.log(array[2]);
console.log(array2[4]);
console.log(name.at(5));
console.log(name[5]);