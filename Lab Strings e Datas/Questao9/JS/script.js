function verificaForca(campo){
    var div = document.getElementById('ForcaSenha');
    var valor = campo.value;
    var contemNumeros = /[0-9]/;
    var contemLetras = /[a-z]/i;
    var contemEspecial = /[@#$%&amp;*]/;
    var contagem = 0;

    if ( valor.length > 0 ){
    if (contemNumeros.test(valor))
    contagem++;
    if (contemLetras.test(valor))
    contagem++;
    if (contemEspecial.test(valor))
    contagem++;

    switch ( contagem ){
    case 1:
    {
    div.style.background ="#ff0000";
    div.innerHTML = "Senha Fraca!";
    } break;
    case 2:
    {
    div.style.background ="#fd8f00";
    div.innerHTML = "Senha Moderada!";
    } break;
    case 3:
    {
    div.style.background = "#00fd87";
    div.innerHTML = "Senha Forte!";
    } break;
    default:
    {
    div.style.background="#FFFFFF";
    div.innerHTML = "Ops! O que Aconteceu?";
    }
    }
    }
    } 