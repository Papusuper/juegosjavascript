let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let opciones = document.getElementById("buttons");
let respuesta = document.createElement("h1");
respuesta.textContent = "Yo sabia, que te interesaba 😎";

button1.addEventListener("mouseover", () => cambiarRespuesta(button1, button2));

button2.addEventListener("mouseover", () => cambiarRespuesta(button1, button2));

button1.addEventListener("click", () => Responder(button1)); 

button2.addEventListener("click", () => Responder(button2));

function cambiarRespuesta(button1, button2){
  let texto = button1.textContent;
  if ( texto !== "si") {
    button1.textContent = "si"
    button2.textContent = "no"
  }
}

function Responder(button){
    let texto = button1.textContent;
if(texto === "SI") {
  opciones.appendChild(respuesta);
 }
}
