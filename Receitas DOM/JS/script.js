window.onload = function () {
    let body = document.getElementsByTagName("body")[0];
    console.log(body);
    for (receita of receitasList) {
        //adicionando o div receita ao DOM
        body.appendChild(montaDiv(receita));
    }
    /*
    receitasList.forEach(function (receita){
        console.log(receita);
    })
    */
  
}

function montaDiv(receita) {
    //criando um elemento HTML <div>
    let divReceita = document.createElement("div");
    //adicionando uma classe à <div>
    divReceita.classList.add("receita");
    //criando um elemento HTML <h3>
    let titulo = document.createElement("h3");
    //criando um texto para o elemento HTML <h3>
    let tituloText = document.createTextNode(receita.nome);
    let descricao = document.createElement("p");
    let descricaoText = document.createTextNode(receita.descricao);
    //criando um elemento HTML <img>
    let foto = document.createElement("img");
    foto.src = receita.foto;
    //vinculando o conteúdo textual ao <p>
    //tituloPreparo.appendChild(tituloPreparoText);
    titulo.appendChild(tituloText);
    descricao.appendChild(descricaoText);
    //vinculando o parágrafo ao div.receita
    divReceita.appendChild(titulo);
    divReceita.appendChild(descricao);
    divReceita.appendChild(foto);
     
//--------------------------------------------------------------------------------------------    
    let tituloPreparo = document.createElement("h4");
    let tituloPreparoText = document.createTextNode("Preparo");
    tituloPreparo.appendChild(tituloPreparoText);
    divReceita.appendChild(tituloPreparo);

    let ordena = document.createElement("ol");
    for(let i = 0; i < receita.preparo.length; i++) {
        let tituloPreparo = document.createElement("li");
        let tituloPreparoText = document.createTextNode(receita.preparo[i]);
        tituloPreparo.appendChild(tituloPreparoText);
        ordena.appendChild(tituloPreparo);
    }
    divReceita.appendChild(ordena);
    
//--------------------------------------------------------------------------------------------    
    let tituloIngredient = document.createElement("h4");
    let tituloIngredientText = document.createTextNode("Ingredientes");
    tituloIngredient.appendChild(tituloIngredientText);
    divReceita.appendChild(tituloIngredient);
    
    for(let i = 0; i < receita.ingredientes.length; i++) {
        let tituloIngredient = document.createElement("li");
        let tituloIngredientText = document.createTextNode(receita.ingredientes[i]);
        tituloIngredient.appendChild(tituloIngredientText);
        divReceita.appendChild(tituloIngredient);
    }
    return divReceita;
}

/*
<div class="receita">
        <h3>(receita.nome) </h3>
        <p>(receita.descricao)</p>
        <img src="<<receita.foto>>" alt="receita.foto">
        <h4>receita.preparo (array a ser iterado)</h4>
        <ol>
            <li></li>
        </ol>
        <h4>receita.ingredientes (array que precisa ser iterado)</h4>
        <ul>
            <li>1kg de cebola</li>
        </ul>
    </div>
    */