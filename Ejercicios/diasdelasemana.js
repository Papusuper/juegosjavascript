function  DiaSemana(){
  let dianumero = parseInt(document.getElementById("dia").value)
  let dia = "";
  let emoji = "";
  switch (dianumero) {
    case 1: 
      dia = "lunes";
      emoji = "😔";
      break;
    case 2: 
      dia = "martes";
      emoji = "🥱";
      break;
    case 3: 
      dia = "miercoles";
      emoji = "😐";
      break;

    case 4: 
      dia = "jueves";
      emoji = "🥴";
      break;
    
    case 5: 
      dia = "viernes";
      emoji = "🥴";
      break;
    
    case 6: 
      dia = "sabado";
      emoji = "🤑";
      break;

    case 7: 
      dia = "domingo";
      emoji = "😎";
      break;

    default:
      alert("no puedes usar 0 ni algo mayor que 7 🧐 genio") 
      break;
  }
  document.getElementById("escribe").innerText = `semana loca y yo soy ${dia},${emoji}`;
} 