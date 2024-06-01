//Estos son operadores matematicos.

let number1 = 23;
let text1 = "samuel";
let bolean = true;
let boloan2 = false;
let number2 = 14;
let number3 = 23;
let number4 = 23;
let suma = number1 + number2;
let resta = number1 - number2;
let multiplicacion = number1 * number2;
let division = number1 / number2;
let residuo = number1 % number2;
let incremento = number1 ++;
//operadores de comparacion.
let igualdad = number1 === number2;
let igualdad2 = number1 == number2;
let igualdad3 = number3 === number4;
let diferencia = number1 !== number3;  
let mayor = number4 > number3;
let menor = number2 < number1;
let mayorigual = number3 >= number4;
let menorigual = number2 <= number1;
//opereadores logicos.
/* si un valor es verdadero Y el otro es verdadero el resultado es verdadero,
si un valor es falso Y el otro valor es falso el resultado es falso,
si un valor es falso Y el otro valor verdadero el resultado va hacer falso,
si un valor es verdadero Y el otro valor es falso el resultado es falso.
*/ 

let operadorAnd = number1 !== number2 && number3 === number1;
let operadorOr = number3 !== number4 || number1 === number2;
let operadorOr2 = number3 !== number4 || text1 === "samuel";
let operadorOr3 = number3 !== number4 || text1 === "samuel" || number1 === 22;
/* si un valor es verdadero O el otro es verdadero el resultado es verdadero,
si un valor es falso O el otro valor es falso el resultado es falso,
si un valor es falso O el otro valor verdadero el resultado va hacer verdadero,
si un valor es verdadero O el otro valor es falso el resultado es verdadero.
*/
let operadorAnd2 = number1 !== number2 && text1 === "samuel";
console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(residuo);
console.log(incremento);
console.log(igualdad);
console.log(igualdad2);
console.log(igualdad3);
console.log(mayor);
console.log(menor);
console.log(mayorigual);
console.log(menorigual);
console.log(diferencia);
console.log(`operador and ${operadorAnd}`);
console.log(`operador or ${operadorOr}`);
console.log(`operador or ${operadorOr2}`);
console.log(`operador and ${operadorAnd2}`);
console.log(`operador or ${operadorOr3}`);