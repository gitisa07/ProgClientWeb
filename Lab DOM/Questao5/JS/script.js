

function ReajusteSalarial(){

    let salario_atual = document.getElementById("SalarioAtual").value;

    let reajuste = document.getElementById("Reajuste").value;

    let salario_final = (parseFloat(salario_atual).toFixed(2) * (parseFloat(reajuste) / 100)) + parseFloat(salario_atual);

    document.getElementById("SalarioFinal").value = Number(parseFloat(salario_final));
} 

function Limpar(){
    document.getElementById("SalarioAtual").value = "";
    document.getElementById("Reajuste").value = "";
    document.getElementById("SalarioFinal").value = "";
    
}