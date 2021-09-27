
function trigonometrica(){

var catetoOposto, catetoAdjacente, hipotenusa, resultado;

catetoOposto = document.getElementById("co").value;
catetoAdjacente= document.getElementById("ca").value;
catetoOposto = parseFloat(catetoOposto);
catetoAdjacente = parseFloat(catetoAdjacente);

hipotenusa = Math.sqrt(catetoOposto*catetoOposto + catetoAdjacente*catetoAdjacente);
document.getElementById("Calc").value = parseFloat(hipotenusa);

}

function Limpar(){
    document.getElementById("co").value = "";
    document.getElementById("ca").value = "";
    document.getElementById("Calc").value = "";
}