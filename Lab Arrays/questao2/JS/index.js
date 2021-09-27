let num;
let x;
let contador;
let n = parseInt(prompt('Digite um numero: '));
num = 0;
while(n > 0){
    num = num + 1;
    x = 1;
    contador = 0;

    while(x <= num){
        if(num % x == 0){
            contador = contador + 1;
        }
        x = x + 1;
    }
    if(contador == 2){
        console.log(`O numero ${num}, é primo`);
        n = n - 1;
    }
    
}