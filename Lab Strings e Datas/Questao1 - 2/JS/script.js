function Inverter(){
    document.getElementById("Resultado").value = "";

    for(count = document.getElementById("Texto").value.length; count >= 0; count --){
        document.getElementById("Resultado").value += document.getElementById("Texto").value.substring(count, count-1);
    }
}

function Limpar(){
    document.getElementById("Texto").value = "";
    document.getElementById("Resultado").value = "";
    document.getElementById("Resultado2").value = "";
}

function Vogais(){
    var texto = document.getElementById("Texto").value;

    var letra = texto.length;
    var vetor = new Array(letra);
    var result = "";

    for (let i = 0; i < letra; i++){
        vetor[i] = texto[i];
        if(texto[i]=="a" || texto[i] == "A" || texto[i]== "á" || texto[i] == "Á" || texto[i] == "à" || texto[i] == "â" || texto[i] == "Â" || texto[i] =="ã" || texto[i] == "Ã" || texto[i] == "e" || texto[i] == "E" || texto[i] == "é" || texto[i] =="É" || texto[i] == "ê" || texto[i] == "Ê" || texto[i] == "i" || texto[i] == "I" || texto[i] == "í" || texto[i] == "Í" || texto[i] == "o" || texto[i] == "O" || texto[i] == "ó" || texto[i] == "Ó" || texto[i] == "ô" || texto[i] == "Ô" || texto[i] == "õ" || texto[i] =="Õ" || texto[i] == "u" ||
        texto[i] == "U" || texto[i] == "ú" || texto[i] == "Ú"){

            vetor[i] = texto[i].bold();
        }
        result = result + vetor[i];
    }
    document.getElementById("Resultado2").innerHTML = result;
 }