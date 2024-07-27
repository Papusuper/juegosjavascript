let dia = "semana"; 
let emoji = "icono";
alert("Hola hoy escogeremos entre los dias de la semana 🎈");
let numero = parseInt(prompt("dijite entre 1,2,3,4,5,6,7 🙂"));
if(numero > 0 && numero < 7){
  if(numero === 1){
    dia = ("hola soy lunes");
   emoji = "😔";
  }
  else if(numero === 2){
    dia = ("hola soy martes");
    emoji = "🥱";
  }
  else if(numero === 3){
    dia = ("hola soy miercoles");
    emoji = "😐";
  }
  else if(numero === 4){
    dia = ("hola soy jueves");
    emoji = "😌"; 
  }
  else if(numero === 5){
    dia = ("hola soy viernes"); 
    emoji = "🥴";
  }
  else if(numero === 6){
    dia = ("soyt sabado");
    emoji = "🤑";
   }
  else{
    dia = ("soy domingo");
    emoji = "😎";
  }
}
else{
  alert("no puedes usar 0 ni algo mayor que 7 🧐 genio") 
} 
document.getElementById("escribe").innerText = `lo que escogiste = ${numero} ${dia} ${emoji} `; 
