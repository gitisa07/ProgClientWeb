
    function Separador(){
    var texto = document.getElementById("Texto").value;
    String(texto);
    var resultado = texto.split(" ");

    //console.log(resultado);

    document.getElementById("Resultado").innerHTML = resultado;
}

function Contador(){
    var frase = document.getElementById("Texto").value;
    var letra = document.getElementById("palavra").value;
    //var resultado = frase.split(letra).length - 1;
    window.confirm("Ocorreram : " + (frase.split(letra).length - 1) + " ocorrências desta palavra.");
}

function Limpar(){
    document.getElementById("Texto").value = "";
    document.getElementById("palavra").value = "";
    document.getElementById("Resultado").value = "";
}
