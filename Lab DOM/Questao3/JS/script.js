
function prime(num){
    if(num!=1){
        for(var i = 2; i < num; i++)
            if(num % i == 0) return false;
            return num !==1;
    } 
}

function isPrime(){
        var num = document.getElementById("n1").value;
        var res = "";
        num = parseInt(num);
    if(!isNaN(num)){
        //verifica se é primo
        if(prime(num)){
            res = (num) + " é primo";
        }
        else{
            res = (num) + " não é primo";
        }
        document.getElementById("Calc").value = (res);
    }
        else{
            alert("Digite um número válido!");
        }
   
}
function Limpar(){
    document.getElementById("n1").value = "";
    document.getElementById("Calc").value = "";
}