function conversor(){
    var Fahrenheit = document.getElementById("fahrenheit").value;
    var Celsius = document.getElementById("celsius").value;

    if(isNaN(Fahrenheit)||isNaN(Celsius)){
        alert("Digite um valor válido!");
        return;
    }
    else if(Fahrenheit === ''){
        Fahrenheit = (parseFloat(Celsius) * (9 / 5)) + 32;
    }
    else if(Celsius === ''){
        Celsius = (parseFloat(Fahrenheit) - 32) * (5 / 9);
    }
    document.getElementById("fahrenheit").value = parseFloat(Fahrenheit).toFixed(1);
    document.getElementById("celsius").value = parseFloat(Celsius).toFixed(1);
}

function Limpar(){
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celsius").value = "";
}