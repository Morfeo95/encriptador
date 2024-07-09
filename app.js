function encriptar(){
    const texto = document.getElementById("entradaDeTexto").value;
    const textoEncriptado = texto
        .replace( /e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/a/g, "ai")
        .replace(/u/g, "ufat");
    const salida = document.getElementById("salidaDeTexto");
    while(salida.firstChild){
        salida.removeChild(salida.firstChild);
    }
    const textoDeSalida = document.createElement("p");
    textoDeSalida.innerText = textoEncriptado;
    textoDeSalida.id = "mensajeEncriptado";
    salida.appendChild(textoDeSalida);
    const boton = document.createElement("button");
    boton.innerText="copiar";
    boton.onclick=copiar();
    salida.appendChild(boton);
    document.getElementById("entradaDeTexto").value = "Ingrese el texto aqui";

}

function copiar(){
    const contenidoAside = document.getElementById("mensajeEncriptado").innerText;
    navigator.clipboard.writeText(contenidoAside);
}

function desencriptar(){
    const texto = document.getElementById("entradaDeTexto").value;
    const textoEncriptado = texto
        .replace( /enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ai/g, "a")
        .replace(/ufat/g, "u");
    const salida = document.getElementById("salidaDeTexto");
    while(salida.firstChild){
        salida.removeChild(salida.firstChild);
    }
    const textoDeSalida = document.createElement("p");
    textoDeSalida.innerText = textoEncriptado;
    textoDeSalida.id = "mensajeEncriptado";
    salida.appendChild(textoDeSalida);
    const boton = document.createElement("button");
    boton.innerText="copiar";
    boton.onclick=copiar();
    salida.appendChild(boton);
    document.getElementById("entradaDeTexto").value = "Ingrese el texto aqui";

}

function cesar() {
    const texto = document.getElementById("entradaDeTexto").value;
    const llave = parseInt(document.getElementById("llave").value);
    const abc = []
    console.log(llave)
    const listaTexto = []
    for (let i of texto){
        listaTexto.push (i);
    }
    for (let i=0 ; i<26; i++){
        abc.push(String.fromCharCode(97+i));
    }

    for (let i = 0 ; i < listaTexto.length; i++){
        for (let j = 0 ; j < abc.length; j++ ){
            let k = (j+llave) % abc.length;
            if (listaTexto[i] === abc[j]) {
                listaTexto[i] = abc[k];
                break;
            }
        }
    }
    const textoEncriptado = listaTexto.join('');
    
    const salida = document.getElementById("salidaDeTexto");
    while(salida.firstChild){
        salida.removeChild(salida.firstChild);
    }
    const textoDeSalida = document.createElement("p");
    textoDeSalida.innerText = textoEncriptado;
    textoDeSalida.id = "mensajeEncriptado";
    salida.appendChild(textoDeSalida);
    const boton = document.createElement("button");
    boton.innerText="copiar";
    boton.onclick=copiar();
    salida.appendChild(boton);
    document.getElementById("entradaDeTexto").value = "Ingrese el texto aqui";

}

function descesar() {
    const texto = document.getElementById("entradaDeTexto").value;
    const llave = parseInt(document.getElementById("llave").value);
    console.log(llave)
    const abc = []
    const listaTexto = []
    for (let i of texto){
        listaTexto.push (i);
    }
    for (let i=0 ; i<26; i++){
        abc.push(String.fromCharCode(97+i));
    }

    for (let i = 0 ; i < listaTexto.length; i++){
        for (let j = 0 ; j < abc.length; j++ ){
            let k = (j-llave+abc.length) % abc.length;
            if (listaTexto[i] === abc[j]) {
                listaTexto[i] = abc[k];
                break;
            }
        }
    }
    const textoEncriptado = listaTexto.join('');
    
    const salida = document.getElementById("salidaDeTexto");
    while(salida.firstChild){
        salida.removeChild(salida.firstChild);
    }
    const textoDeSalida = document.createElement("p");
    textoDeSalida.innerText = textoEncriptado;
    textoDeSalida.id = "mensajeEncriptado";
    salida.appendChild(textoDeSalida);
    const boton = document.createElement("button");
    boton.innerText="copiar";
    boton.onclick=copiar();
    salida.appendChild(boton);
    document.getElementById("entradaDeTexto").value = "Ingrese el texto aqui";

}