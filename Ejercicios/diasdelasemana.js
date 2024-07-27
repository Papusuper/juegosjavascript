let dia = "semana"; 
let emoji = "icono";
alert("Hola hoy escogeremos entre los dias de la semana 🎈");
let numero = parseInt(prompt("dijite entre 1,2,3,4,5,6,7 🙂"));

switch (numero) {
  case 1: 
    dia = "hola soy lunes";
    emoji = "😔";
    break;
  case 2: 
    dia = "hola soy martes";
    emoji = "🥱";
    break;
  case 3: 
    dia = "hola soy miercoles";
    emoji = "😐";
    break;

  case 4: 
    dia = "hola soy jueves";
    emoji = "🥴";
    break;
  
  case 5: 
    dia = "hola soy viernes";
    emoji = "🥴";
    break;
  
  case 6: 
    dia = "hola soy sabado";
    emoji = "🤑";
    break;

  case 7: 
    dia = "soy domingo";
    emoji = "😎";
    break;

  default:
    alert("no puedes usar 0 ni algo mayor que 7 🧐 genio") 
    break;
}
document.getElementById("escribe").innerText = `lo que escogiste = ${numero} ${dia} ${emoji} `; 
