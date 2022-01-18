$(function(){
	let link = "https://rafaelescalfoni.github.io/desenv_web/receitas.json";
	$.get(link, function(data){
		console.log(data);
		$.each(data, function (index, receita){
			let $divCatalogo = $("<div>").addClass("catalogo");
			let $foto = $("<img>").attr("src", receita.foto).addClass("figura");
			let $nome = $("<h1>").text(receita.nome).addClass("titulo");
			/* let $genero = $("<p>").text(filme.generos.join(", ")).addClass("generos");
			let $estrela = filme.opinioes[0].rating;
			let $sinopse = $("<h4>").text(filme.resumo).addClass("sinopse");
			let $elenco = $("<p>").text("Elenco: " + filme.elenco.join(", ")).addClass("elenco");
			let $semelhantes = $("<p>").text("Títulos Semelhantes:").addClass("ts"); */
			$divCatalogo.append($foto);
			$divCatalogo.append($nome);
			/* $divCatalogo.append($estrela);
			$divCatalogo.append($genero);
			$divCatalogo.append($sinopse);
			$divCatalogo.append($elenco);
			$divCatalogo.append($semelhantes); */
			$("body").append($divCatalogo);
		})

	});
})