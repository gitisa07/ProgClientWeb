function CalcMedia(){
    var nota1 = document.getElementById("n1").value;
    var nota2 = document.getElementById("n2").value;
    var nota3 = document.getElementById("n3").value;
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);
    resultado = document.getElementById("Resultado");

    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
        alert("Digite um número válido!");
        return;
    }

    var media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10;

    document.getElementById("Calc").value = parseFloat(media).toFixed(2);
    
}

function Limpar(){
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("n3").value = "";
    document.getElementById("Calc").value = "";
}