const path = require('path');
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'legendas');
const simbolos = ["'",'.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']','(', ')'];

fn.lerDiretorio(caminho)
	.then(fn.elementosTerminadosCom('.srt'))
	.then(fn.lerArquivos)
	.then(fn.mesclarElemento)
	.then(fn.separarTextoPor('\n'))
	.then(fn.removerVazios)
	.then(fn.removerSeIncluir('-->'))
	.then(fn.removerSeApenasNumeros)
	.then(fn.removerSimbolos(simbolos))
	.then(fn.mesclarElemento)
	.then(fn.separarTextoPor(' '))
	.then(fn.removerVazios)
	.then(fn.removerSeApenasNumeros)
	.then(fn.agruparElementos)
	.then(fn.ordenarPorAttrNumerico('qtde', 'desc'))
	.then(console.log)
