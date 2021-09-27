//**************   sum   *********************/
var vetor = [1, 2, 3, 7];
let total = 0;

    function sum (vetor) {
        total += vetor; 
    }
vetor.forEach(sum);
console.log(`A soma dos elementos do vetor é: ${total}`);

//*****************   sumOdds      *******************//
let soma = 0;   
    function sumOdds (vetor){
    for(x = 0; x < vetor.length; x++){
        if (vetor[x] % 2 != 0){
             soma += vetor[x];
            
        }  
    }
    return soma;
}
vetor.forEach(sumOdds);
console.log(`A soma dos elementos ímpares do vetor é: ${sumOdds(vetor)}`);

//***************    product     *******************//
    function product(vetor){
        let resultado = 1;
        for(x = 0; x < vetor.length; x++) 
            resultado *= vetor[x];
            return resultado; 
    }
     console.log(`O produto dos elementos do vetor é: ${product(vetor)}`);


