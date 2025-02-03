// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// //Aquí deberás desarrollar la lógica para resolver el problema.

//Challenge Amigo Secreto

//Variables
let listaNombresAmigos = [];
let numeroDeAmigos = 0;
let contAmigosRegistrados = 0;
let lista = document.getElementById("listaAmigos");

function agregarAmigo(){
   //Cargamos los nombres en un array y verificamos que no sea vacio
    let nombreAmigo = document.getElementById('amigo').value;
    console.log(nombreAmigo);
    if(!nombreAmigo) {
        alert("Debes ingresar un nombre!");
    }
    else{
        listaNombresAmigos.push(nombreAmigo);
        //console.log(listaNombresAmigos); //creado solo para pruebas
        limpiarInput();
        numeroDeAmigos = listaNombresAmigos.length;
        //console.log(numeroDeAmigos); //creado solo para pruebas
        //imprimimos los nombres en la pantalla
        imprimirNombre(contAmigosRegistrados);
        contAmigosRegistrados++;
    }
}

function limpiarInput(){
    document.querySelector('#amigo').value = '';
}

function  imprimirNombre(numElementoArray){
    let li = document.createElement('li');
    li.innerText = listaNombresAmigos[contAmigosRegistrados];
    lista.appendChild(li);
    return;
}

function sortearAmigo(){
    let numeroGenerado = Math.floor(Math.random()*listaNombresAmigos.length);
    console.log(numeroGenerado);
    let elementoHTML = document.querySelector('#resultado');
    elementoHTML.innerHTML = listaNombresAmigos[numeroGenerado];
}