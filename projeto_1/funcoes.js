const fs = require('fs');
const path = require('path')

function lerDiretorio(caminho) {
	return new Promise((resolve, reject) => {
		try {
			let arquivos = fs.readdirSync(caminho);
			arquivos = arquivos.map(arquivo => path.join(caminho, arquivo));
			resolve(arquivos)
		}catch(err){
			reject(err);
		}
	})
}

function elementosTerminadosCom(padraoTextual) {
	return function(array) {
		return array.filter(array => array.endsWith(padraoTextual));
	}
}

function lerArquivo(caminho) {
	return new Promise((resolve, reject) => {
		try{
			const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
			resolve(conteudo.toString())
		}catch(err) {
			reject(err);
		}

	})
}

function lerArquivos(caminhos) {
	return Promise.all(caminhos.map(caminho => lerArquivo(caminho)));
}

function removerVazios(array) {
	return array.filter(el => el.trim())
}

function removerSeIncluir(padraoTextual, array) {
	return function(array) {
		return array.filter(el => !el.includes(padraoTextual))
	}
}

function removerSeApenasNumeros(array) {
	return array.filter(el => {
		const num = parseInt(el.trim());
		return num !== num
	})
}
function removerSimbolos(simbolos) {
	return function(array) {
		return array.map(el => {
			return simbolos.reduce((acc, simbolo) => {
				return acc.split(simbolo).join('')
			}, el)
		})
	}
}
function mesclarElemento(array) {
	return array.join(' ');
}

function separarTextoPor(simbolo) {
	return function(texto) {
		return texto.split(simbolo);
	}
} 

function agruparElementos(palavras) {
	return Object.values(palavras.reduce((acc, palavra) => {
		const el = palavra.toLowerCase();
		const qtde = acc[el] ? acc[el].qtde + 1 : 1;
		acc[el] = { elemento: el, qtde}

		return acc;
	}, {}))
}

function ordenarPorAttrNumerico(attr, ordem = 'asc') {
	return function(array) {
		const asc = (o1, o2) => o1[attr] - o2[attr];
		const desc = (o1, o2) => o2[attr] - o1[attr];

		return array.sort(ordem == 'asc' ? asc : desc);
	}
}


module.exports = {
	lerDiretorio,
	elementosTerminadosCom,
	lerArquivos,
	lerArquivo,
	removerVazios,
	removerSeIncluir,
	removerSeApenasNumeros,
	removerSimbolos,
	mesclarElemento,
	separarTextoPor,
	agruparElementos,
	ordenarPorAttrNumerico
}