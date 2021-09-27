
let saque = parseInt(prompt('Digite o valor do saque ( apenas valores inteiros! ) : '));

let cedulas = [100, 50, 20, 10, 5, 2];

    window.alert(`O dinheiro a ser sacado é: R$ ${saque},00`)
   
    for(i = 0; i < cedulas.length; i++){

        let quantidade = saque / cedulas [parseInt(i)];
       
        console.log(`${parseInt(quantidade)} cédula (s) de ${cedulas[i]}`);
       
        saque = saque % cedulas[i];
        
    }
    
    window.alert('Saque aprovado!');

