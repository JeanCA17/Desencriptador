function encriptar(elemento){
    var palabra = document.getElementsByTagName("textarea")[0].value; // este codido lo que hace es tomar el texto escrito en el textarea //
    var palabra_codificada = btoa(palabra);                           //esta variable lo que hace es que codifica la palabra que se tomó de la variable anterior //
    document.getElementById("resultado").innerHTML = palabra_codificada; //este "comando" lo que hace es que muestra el resultado de la palabra codificada sobre el text area con el id resultado//

    document.getElementById("candado_cerrado").style.display ="block"; // estas lineas de codigo lo que hacen es ocultar las imagenes y los textos a la hora de pulsar un bototon//
    document.getElementById("muñeco_imagen").style.display ="none";
    document.getElementById("candado_abierto").style.display ="none";
    document.getElementById("texto_inicio").style.display ="none";
    document.getElementById("texto_encriptar").style.display ="block";
    document.getElementById("texto_desencriptado").style.display ="none";
    
    
}

function desencriptar(elemento){
    var palabra = document.getElementsByTagName("textarea")[0].value;
    var palabra_decodificada = atob(palabra);                              // esta variable tiene la misma funcion que la de arriba solo que desencripta el texto //       
    document.getElementById("resultado").innerHTML = palabra_decodificada;

    document.getElementById("candado_abierto").style.display ="block";
    document.getElementById("candado_cerrado").style.display ="none";
    document.getElementById("muñeco_imagen").style.display ="none";
    document.getElementById("texto_encriptar").style.display ="none";
    document.getElementById("texto_desencriptado").style.display ="block";
    document.getElementById("texto_inicio").style.display ="none";
}

function copiar(elemento){

    document.getElementById("palabra").value = document.getElementById("palabra").innerHTML =  document.getElementById("resultado").value;  //esta funcion copia el resultado del texto encriptado y lo pasa al otro area de texto haciendo la funcion del boton copiar// 
}

function reset(elemento){
    document.getElementById("palabra").value = document.getElementById("palabra").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    document.getElementById("candado_abierto").style.display ="none";
    document.getElementById("candado_cerrado").style.display ="none";
    document.getElementById("muñeco_imagen").style.display ="block";
    document.getElementById("texto_encriptar").style.display ="none";
    document.getElementById("texto_desencriptado").style.display ="none";
    document.getElementById("texto_inicio").style.display ="block";

}