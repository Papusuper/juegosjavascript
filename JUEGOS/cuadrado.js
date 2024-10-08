document.addEventListener('keydown', function(event){
    let tecla = document.createElement("h1");
    tecla.textContent = event.key;
    document.body.appendChild(tecla);
});
