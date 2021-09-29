const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function countDays() {
let date_ini = new Date(document.form_main.date_ini.value);
let date_end = new Date(document.form_main.date_end.value);

let diff = date_end.getTime() - date_ini.getTime();

document.getElementById('days').innerText = (Math.floor(diff / day) + " dias de vida");
}

function Extenso(){

    let data = document.querySelector("#days2");
    let date= new Date(document.form_main.date_ini.value);
    let formato = Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short"
    });

    document.getElementById(data).innerHTML = formato.format(date);
    //data.innerHTML = formato.format(date);
    
}



function Diference(){
    let data1 = new Date(document.form_main.date_ini.value);
    let data2 = new Date(document.form_main.date_end.value);

    let diff = moment(data2).diff(moment(data1));

    let semanas = parseInt(moment.duration(diff).asWeeks());

    console.log(semanas);

    document.getElementById('date1').innerText = semanas + " semanas";
}