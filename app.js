function encriptar(){
    const texto = document.getElementById("entradaDeTexto").value;
    const textoEncriptado = texto
        .replace(/a/g, "ai")
        .replace( /e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    console.log(textoEncriptado);
    const salida = document.getElementById("salidaDeTexto")
    while(salida.firstChild){
        salida.removeChild(salida.firstChild);
    }
    const textoDeSalida = document.createElement("textarea");
    textoDeSalida.innerText = textoEncriptado;
    salida.appendChild(textoDeSalida);
    const boton = document.createElement("button");
    boton.innerText="copiar";
    boton.id = "copia"
    salida.appendChild(boton);

}