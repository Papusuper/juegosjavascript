// 1 hacer una function que agrege un item a una  lista de mercado cuando el usuario aprete el boton
// 2 obtener el valor que el usuiario digito en un input 
// 3 agregar el valor del usuario a la lista
// 4 mostrar los valores en una lista 
let listaDeMercado = [];
let item = document.getElementById("item");
let lista = document.getElementById("lista"); 
function  agregarListaDeMercado(){  
  listaDeMercado.push(item.value);
  imprimirListaDeMercado();   
}
function imprimirListaDeMercado(){
  lista.innerHTML = "";
  listaDeMercado.forEach(function(mercado){
   let nuevoElemento = document.createElement("li");
   nuevoElemento.textContent = mercado;
   lista.appendChild(nuevoElemento);
   console.log("Esta es la lista:" + mercado);
 });
}