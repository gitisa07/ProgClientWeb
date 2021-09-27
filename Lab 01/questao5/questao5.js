imprimeNumerosPrimos(1000);

function imprimeNumerosPrimos(limite){
    for (let num = 2; num <= limite; num ++){
        if (NumeroPrimo (num))
        console.log(num);
    }
}

function NumeroPrimo(num) {
    for (let div = 2; div < num; div ++){
        if (num % div === 0){
            return false;
        }
    }
    return true;
}




    
