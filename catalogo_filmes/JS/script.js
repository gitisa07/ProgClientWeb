window.onload = function () {

        let url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";
    
        let xhttp = new XMLHttpRequest();
    
        xhttp.onreadystatechange = function() {
    
            if(this.readyState == 4 && this.status == 200)
            {
                let filmes = JSON.parse(this.responseText);
    
                montaCatalogo(filmes);
            }
        }
        xhttp.open("GET", url)
        xhttp.send();
    }

function montaCatalogo(filmes){
   //console.log(filmes[0].titulo);
    let body = document.getElementsByTagName("body")[0];
    for( let i = 0; i < filmes.length; i++){

//----------------CRIA A DIV PRINCIPAL-----------------------
        let div = document.createElement("div");
        if(i % 2 == 0){

                div.classList.add("divMasterLeft"); 
        }
        else{
                div.classList.add("divMasterRight"); 
        }
        
        let divFilme = document.createElement("div");
        divFilme.classList.add("divFilme");

        
//---------------------CLASSIFICAÇÃO----------------------------------------------------------------
        let divClassificacao = document.createElement("div");
        divClassificacao.classList.add("classificacao");
        let classificacao = document.createElement("p");
        classificacao.classList.add("numero")
        let textoClassificacao = document.createTextNode(filmes[i].classificacao);

        parseInt(filmes[i].classificacao);
        if(filmes[i].classificacao >= 18)
        {
        classificacao.style.backgroundColor = "red";
        }
        else{
        if(filmes[i].classificacao >= 14){
        classificacao.style.backgroundColor = "rgb(255,140,00)";
        }
        else{
        classificacao.style.backgroundColor = "green";
        textoClassificacao = document.createTextNode("Livre");
        }
        }
        classificacao.appendChild(textoClassificacao);
        divClassificacao.appendChild(classificacao);
        divFilme.appendChild(divClassificacao);
//
//----------------------TÍTULO-----------------------
        let titulo = document.createElement("h2");
        titulo.classList.add("nomeFilme")
        let textoTitulo = document.createTextNode(filmes[i].titulo);
        titulo.appendChild(textoTitulo);
        divFilme.appendChild(titulo);

//---------------------IMAGEM------------------------------------
        let foto = document.createElement("img");
        foto.classList.add("fotoDoFilme");
        foto.src = filmes[i].figura;
        divFilme.appendChild(foto);

//----------------------SINOPSE---------------------------------
        let tituloResumo = document.createElement("h4");
        let tituloResumoText = document.createTextNode("SINOPSE");
        tituloResumo.appendChild(tituloResumoText);
        divFilme.appendChild(tituloResumo); 

        let resumo = document.createElement("p");
        let textoResumo = document.createTextNode(filmes[i].resumo);
        resumo.appendChild(textoResumo);
        divFilme.appendChild(resumo);

//----------------------GÊNEROS------------------------------------
        let tituloGeneros = document.createElement("h4");
        let tituloGenerosText = document.createTextNode("GÊNEROS");
        tituloGeneros.appendChild(tituloGenerosText);
        divFilme.appendChild(tituloGeneros);

        let generos = document.createElement("p");
        for(let j = 0; j < filmes[i].generos.length; j++)
        {
                if(j == filmes[i].generos.length-1)            
                { let textoGeneros = document.createTextNode(filmes[i].generos[j]+ ".");
                  generos.appendChild(textoGeneros);
                }else{let textoGeneros = document.createTextNode(filmes[i].generos[j]+  ", ");
                 generos.appendChild(textoGeneros);
                }
                
        }
        divFilme.appendChild(generos);

//---------------------SEMELHANTES------------------------------------------
        let tituloSemelhantes = document.createElement("h4");
        let tituloSemelhantesText = document.createTextNode("SEMELHANTES");
        tituloSemelhantes.appendChild(tituloSemelhantesText);
        divFilme.appendChild(tituloSemelhantes);

        let semelhantes = document.createElement("p");
        for(let j = 0; j < filmes[i].titulosSemelhantes.length; j++)
        {
            let id = filmes[i].titulosSemelhantes[j];
            let espaco = " | "
            let titulosSemelhantes = document.createTextNode(filmes[id-1].titulo + espaco);
            semelhantes.appendChild(titulosSemelhantes);
        }
        divFilme.appendChild(semelhantes);

//----------------------------ELENCO---------------------------------
       let tituloElenco = document.createElement("h4");
        let tituloElencoText = document.createTextNode("ELENCO");
        tituloElenco.appendChild(tituloElencoText);
        divFilme.appendChild(tituloElenco);

        let elenco = document.createElement("p");
        for(let j = 0; j < filmes[i].generos.length; j++)
        {
                if(j == filmes[i].generos.length-1)            
                { let textoElenco = document.createTextNode(filmes[i].elenco[j]+ ".");
                  elenco.appendChild(textoElenco);
                }else{let textoElenco = document.createTextNode(filmes[i].elenco[j]+  ", ");
                 elenco.appendChild(textoElenco);
                }
        }
        divFilme.appendChild(elenco);

//-----------------------OPINIÕES / RATING---------------------------
        let opinioes = document.createElement("div");
        opinioes.classList.add("opinioes");
        let sub = document.createElement("h4");
        let tituloSub = document.createTextNode("OPINIÕES");
        sub.appendChild(tituloSub);
        opinioes.appendChild(sub);

        for(let j = 0; j < filmes[i].opinioes.length; j++){
                
                let rating = document.createElement("img");
                rating.src = "5stars.png";

                switch(filmes[i].opinioes[j].rating){
                        case 4:
                                rating.src = "4stars.png";
                        break;
                        case 3:
                                rating.src = "3stars.png";
                        break;
                        case 2:
                                rating.src = "2stars.png";
                        break;
                        case 1:
                                rating.src = "1stars.png";
                        break;
                         
                }
                opinioes.appendChild(rating);

                let descricao = document.createElement("p");
                let textoDescricao = document.createTextNode(filmes[i].opinioes[j].descricao);
                descricao.appendChild(textoDescricao);
                opinioes.appendChild(descricao);
        }
        div.appendChild(opinioes);
        div.appendChild(divFilme);
        divFilme.appendChild(opinioes);
        body.appendChild(div);

        let br = document.createElement("br");
        br.classList.add("br");
        if(i % 2 != 0){
                body.appendChild(br);
        }
   }
  
}
