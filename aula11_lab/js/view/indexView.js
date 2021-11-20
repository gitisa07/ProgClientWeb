/**
 * Scripts de view determinam como será apresentado
 * o seu modelo de dados na tela
 * 
 */


/**
 * Define como os itens serão carregados na tela
 * @param {lista de itens} foods 
 */
function createItems(foods) {
    //recupera o container dos itens
    let menu = document.querySelector("#menu");
    //apagando os itens atuais do DOM
    menu.innerHTML = "";
    foods.forEach(food => {
        let divFood = document.createElement("div");
        divFood.innerHTML = `<button id = "update = ${food.id}" onclick = "updated(${food.id})">Editar</button>
        <figure id = "food-${food.id}">
            <img src = "${food.image}" alt = ${food.name}">
            <figcaption> ${food.name}</figcaption>
            </figure>`;
        menu.appendChild(divFood);
    });
}



function save() {
    document.querySelector('#save-food').blur();
    return Object.fromEntries(new FormData(formFood));
}

export default {createItems, save};