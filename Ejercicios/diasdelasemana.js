function  DiaSemana(){
  let dianumero = parseInt(document.getElementById("dia").value)-1
  let emoji = ["🧐","😎","🤑","🥴","😐","🥱","😔"];
  let dia = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
  document.getElementById("escribe").innerText = `semana loca y yo soy ${dia[dianumero]},${emoji[dianumero]}`;
} 
