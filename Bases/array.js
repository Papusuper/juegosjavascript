let fruits = ["orange", "apple", "bananas"];
// Agrega un nuevo elemento al array
fruits.push("water malon");
console.log(fruits);
fruits.pop()
// Remueve el ultimo elemento 
console.log(fruits);
console.log(fruits.length);
//Elimina el primer elemento.
fruits.shift();
console.log(fruits);
//Inserta un elemento al principipo
fruits.unshift("mango");
console.log(fruits);
fruits.push("orange");
// Parte el arreglo y lo guarda en un nuevo arreglo
let slicedFruits = fruits.slice(1,4);
console.log(slicedFruits);
console.log(fruits);
// Cambia el contenido de array, removiendo, remplanzado o añadiendo
fruits.splice(1,1, "melon");
console.log(fruits);
fruits[1] = "apple";
console.log(fruits);
//Ejecuta una funcion por cada elemento
fruits.forEach(function(fruit){
   console.log("Esta es la fruta:" + fruit);
});
/// crear un nuevo arreglo proviendo una funcion y recorriendo cada elemento del array
let numbers = [1,2,3,4,5,6]
let double = numbers.map(function(number){
   return number * 2;
});
console.log(numbers);
console.log(double);

// Crea un un nuevo array interactua cada elemento y me devuelve la condicion que le aplique

let numberPar = numbers.filter(function(number)
{
    //condicion
    return number % 2 === 0;
});

console.log(numberPar);

let numberMayor3 = numbers.filter(function(number)
{
    // condicion
    return number > 3;
});

console.log(numberMayor3);
/// Forma fea
let suma = 0; 
numbers.forEach(function(number){
   suma = number + suma;
});

console.log("La suma del arreglo numbers es igual a " + suma);

let suma2 = numbers.reduce(function(accumulator, currentValue){
   return accumulator + currentValue;
});
console.log("La suma con el metodo reduce " + suma2);

/// Metedo para encontrar un elemento bajo una condicion y me trae el valor del primer elemento que encuentras
let firtsEvennt = numbers.find(function(number){
    //condicion
    return number > 4;
});

let apple = fruits.find(function(fruit){
    // condicion
   return fruit === "apples"
});

console.log("Con el metedo find si hay un numero mayor a 4: " + firtsEvennt);
console.log("Con el metodo find en frutas si esta apple :   " + apple);

/// Metodo Find index me ayuda a traer la posicion del elemento
let appleIndex = fruits.findIndex(function(fruit){
    // condicion
   return fruit === "apple"
});

console.log("El el elemento findIndex me dice en que posicion fue encontrado :   " + appleIndex);

// Con el metodo include se si un elemento existe o no, me va a traer false o true
let ifExist = fruits.includes("bananas");
let ifExist2 = fruits.includes("dsdsd");
console.log(ifExist, ifExist2 );

// Con este metodo puedo concatenar dos arreglos
let allfruitNumbers = fruits.concat(numbers);
console.log("La concatenacion de frutas y numeros es: " + allfruitNumbers);

//Con el metodo sort ordeno el arreglo original
let fruitsSort = ["cherry", "banana", "apple"];
let numbers4 = [1,5,3,6,8];

fruitsSort.sort();
numbers4.sort();
console.log("Frutas ordenadas:" + fruitsSort);
console.log("Numeros ordenados:" + numbers4);
//El metodo reverse me reversa el arreglo
fruitsSort.reverse();
console.log("Frutas ordernadas de forma acendente:" + fruitsSort);

//El metodo split me ayuda a dividir un string y convertirlo en arreglo
let fruitsString = "apple,banana,melon"; 
let fruitSplit = fruitsString.split(",");
console.log(fruitSplit);

// El metodo join 
let fruitString = fruits.join(",");
console.log("El metodo join es ", fruitString);








//Concepto de copia de arreglos (de referencia) y la correcta copia de arreglos
let numbers1 = [1,2,3,4];
let numbers2 = numbers1;
console.log(numbers1);
console.log(numbers2);
numbers2[3] = 5;
console.log(numbers2);
console.log(numbers1);
numbers3 = [...numbers1, ...numbers2];
console.log(numbers3);
numbers3[0] = 5;









