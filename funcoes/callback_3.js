const carrinho = [
	{ nome: 'Caneta', qtde: 10, preco: 7.99 },
	{ nome: 'Impressora', qtde: 4, preco: 7.99 },
	{ nome: 'Caderno', qtde: 3, preco: 7.99 },
	{ nome: 'Lápis', qtde: 1, preco: 7.99 },
]

const getTotal = item => { return {total: item.qtde * item.preco}}
const totais = carrinho.map(getTotal);
console.log(totais);