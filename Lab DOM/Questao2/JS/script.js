function identificador(){
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    //var res = document.getElementById("resultado");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(isNaN(num1) || isNaN(num2)){
        alert("Digite um número válido!");
        return;
    }

    if(num1>=num2){
         document.getElementById ("Calc").value = parseFloat(num1);
    }
    else{
        document.getElementById("Calc").value = parseFloat(num2);
    }
   
}
function Limpar(){
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("Calc").value = "";
}