//new Set(); // es muy parecido al arreglo pero la diferencia es que es solo recibe numeros unicos 
const gameBoard = document.querySelector("#gameboard");
const play = document.getElementById("play");
const info = document.getElementById("info");
const squareNumbers = 16;

 
let timeoutID;
let match = 8;
let tempScore = ""; 
let startCells = [];


function setOutput(){
    const squares = document.querySelectorAll(".square");
    if(match === 0){
      info.textContent = "ganaste muy bien";
      info.style.color = "green";
    } else {
        squares.forEach(square => square.remove()); // recorre todo lo que este en una arreglo es forEach
        info.textContent = "perdiste, muy mal";
        info.style.color = "red";
    } 
   
}

function playerTime() {
    timeoutID = setTimeout(setOutput, 8000);
}

play.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square"); 
    tempScore = "";
    info.style.color = "black";
    clearTimeout(timeoutID);
    if(squares.length) {
        squares.forEach(square => square.remove()); // recorre todo lo que este en una arreglo es forEach
    }

    if(startCells.length === 0){
        startCells = ["😂","😂","😎","😎","😍","😍","🤗","🤗","🙄","🙄","😴","😴","🏴‍☠️","🏴‍☠️","🍕","🍕"];
    }
    match = 8;
    playerTime();
     createBoard();
     createEmogi();
     info.textContent = "";
})

function createEmogi(){
   for(let i = 0; i < squareNumbers; i++){
     const randomNumber = Math.floor(Math.random() * startCells.length);
     const emoji = startCells[randomNumber];
     let square = document.getElementById(`${i}`);
     const emojiElement = document.createElement("div");
     emojiElement.classList.add("emoji");
     emojiElement.textContent = emoji;
     square.append(emojiElement);
     startCells.splice(randomNumber,1); 
   }
}
function createBoard() {   
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("square");
        cellElement.id = index;
        cellElement.addEventListener("click", addGo)
        gameBoard.append(cellElement);
    }); 
}
function addGo(event) {
     let emoji = event.target;
     let emojiContent = emoji.textContent;

    if(tempScore !== ""){
      if(tempScore === emojiContent){
       emoji.style.backgroundColor = "red";
       match = match - 1;
       tempScore = "";
       info.textContent = `faltan = ${match}`;
      }
      else {
        info.textContent = "te equivocaste";   
      }
    }
    else{
        tempScore = emojiContent;
        emoji.style.backgroundColor = "red";
    } 
    
}