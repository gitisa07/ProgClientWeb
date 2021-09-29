function Palavra(){
    let frase = document.getElementById("Texto").value;
    let entrada = frase.split(" ")
    let ocorrencias = {};

    for ( let i = 0 ; i < entrada.length ; i++ )
    ocorrencias[entrada[i]] = 1 + (ocorrencias[entrada[i]] || 0);
    let maior = null;
    let ocorrenciasMaior = -1;

    for ( let p in ocorrencias )
        if ( ocorrencias[p] > ocorrenciasMaior ) {
            maior = p;
            ocorrenciasMaior = ocorrencias[p];
        }

        document.getElementById("Resultado").innerHTML = ("A palavra que apareceu mais vezes foi : (" + maior + ") com " +(ocorrenciasMaior))+ " ocorrências.";
}

function Substituir(){
    let texto = document.getElementById("Texto").value;
    let palavra1 = document.getElementById("Palavra").value;
    let palavra2 = document.getElementById("PalavraSubs").value;
    let resultado = texto.replace(palavra1, palavra2);

    document.getElementById("Resultado2").innerHTML =  resultado;
}

function Limpar(){
    document.getElementById("Texto").value = "";
    document.getElementById("Palavra").value = "";
    document.getElementById("PalavraSubs").value = "";
    document.getElementById("Resultado").value = "";
    document.getElementById("Resultado2").value = "";
}
