
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var input = document.querySelector("#input-texto");

var desencriptado = ["e", "i", "a" ,"o", "u"];
var encriptado = ["enter", "imes", "ai", "ober", "ufat"]; 

var cantllaves = desencriptado.length;

function encriptar(event){
	event.preventDefault();

	for(var i = 0; i < cantllaves; i++){
		input.value = input.value.replace(desencriptado[i], encriptado[i]);
	}
	
	texto.value = input.value;
	input.value = "";
}

function desencriptar(event){
	event.preventDefault();

	for(var i = 0; i < cantllaves; i++){
		input.value = input.value.replace(encriptado[i], desencriptado[i]);
	}

	texto.value = input.value;
	input.value = "";
}



function copiarTexto(){
	navigator.clipboard.writeText(texto.value);
}
  
var texto = document.querySelector("#msg");


var boton_encriptar = document.querySelector("#btn-encriptar");
var boton_desencriptar = document.querySelector("#btn-desencriptar");
var boton_copiar = document.querySelector("#btn-copy");



boton_encriptar.onclick = encriptar;
boton_desencriptar.onclick = desencriptar;
boton_copiar.onclick = copiarTexto;
