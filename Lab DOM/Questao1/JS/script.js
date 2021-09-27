
function soma(){
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(isNaN(num1) || isNaN(num2)){
        alert("Digite um número válido!");
        return;
    }
    var resultado = (num1 + num2);
    document.getElementById("Calc").value = parseFloat(resultado);
}
function Limpar(){
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("Calc").value = "";
   
}