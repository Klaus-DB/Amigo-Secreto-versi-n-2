// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo"); 
    let nombreAmigo = inputAmigo.value;
    if(!nombreAmigo){
        alert("Debes escribir un nombre");
        return;
    }
    amigo.push(nombreAmigo);
    
}
