 function convertInputToLowerCase() {
   let inputText = document.getElementById("inputText").value;
   let lowerCase = ""
   if(inputText === ""){
      lowerCase = "no digitaste nada 🤯";  
   }
   else{
    lowerCase = inputText.toLowerCase();
   } 
   document.getElementById("resultado").innerText = lowerCase;
 }