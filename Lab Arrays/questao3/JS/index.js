let numero = prompt('Digite um número para ser convertido em Romano: ');

const numeroRomano = [1000, 575, 500, 100, 93, 59, 50, 48, 10, 9, 6, 5, 4, 3, 1];

const converter = {
    1: 'I',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    9: 'IX',
    10: 'X',
    48: 'XLVIII',
    50: 'L',
    59: 'LIX',
    93: 'XCIII',
    100: 'C',
    500: 'D',
    575: 'DLXXV',
    1000: 'M'
};

function ConverterRomano(num) {
    let saida = '';
    let i = 0;

    while (num > 0){
        const subtrair = numeroRomano [i];
        if (subtrair > num){
            i++;
        }
        else{
            num -= subtrair;
            saida += converter [subtrair];
        }
    }
    return saida;
}

window.alert(ConverterRomano (numero));
