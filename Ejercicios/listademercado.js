// 1 hacer una function que agrege un item a una  lista de mercado cuando el usuario aprete el boton
// 2 obtener el valor que el usuiario digito en un input 
// 3 agregar el valor del usuario a la lista
// 4 mostrar los valores en una lista
// se declaro un arreglo o vacio. 
let listaDeMercado = [];
// se obtienen los item de la etiqueta html
let item = document.getElementById("item");
let lista = document.getElementById("lista");
 // agrega una funcion que agregue un item a la lista del usuario.
function  agregarListaDeMercado(){
   if (item.value.trim() === ""){
      alert("tienes que escribir algo para que se agrege");
   }  
  // agrega el valor del input a la lista
   else {
    listaDeMercado.push(item.value);
    // llamr una funtion de lista de mercado
    imprimirListaDeMercado();   
   } 
   
}
// llama una funcion que imprime la lista de mercado o los objetos de ponga los usuarios 
function imprimirListaDeMercado(){
  lista.innerHTML = "";
  listaDeMercado.forEach(function(mercado){
   let nuevoElemento = document.createElement("li");
   nuevoElemento.textContent = mercado;
   lista.appendChild(nuevoElemento);
  });
  // este document muestra la cantidad de elementos que hay 
  document.getElementById("cantidad").innerText = `la cantidad total es :${listaDeMercado.length}`;
}
// agegra una funcion que quite todos los elementos que allan en la lista. 
 function quitarElementos(){
   console.log("estoy en esta funcion");
   listaDeMercado = [];
   imprimirListaDeMercado();
}