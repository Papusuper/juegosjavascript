// 1 preguntar por un personaje de la novela betty la fea. 
// 2 si es un  personaje dira que si es un personaje y si no dira que no te viste la novela
let personaje = prompt("Digita un personaje de betty la fea");
let personaje2 = personaje.toLowerCase(); 
switch (personaje2) {
    case "armando":   
        console.log("es el amante de betty");
        break;
    case "betty":
        console.log("es la protagonista");
        break;
    case "jirafa":
    case "inesita":
    case "berta":
        console.log(" son del cuartel de las feas");
        break;               
    default:
        console.log("no sabes de  la novela 🤣");  
        break;

} 