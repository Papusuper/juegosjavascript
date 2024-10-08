for(let index = 0; index <= 20; index++) {
    let result = index * 2;
    console.log(result); 
    let element  = document.createElement("p");
    element.textContent = result;
    document.body.appendChild(element);  
}
