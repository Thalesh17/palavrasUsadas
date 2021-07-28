function esperarPor(tempo = 2000) {
	return new Promise(function(resolve) {
		setTimeout(() => {
			console.log('Esperando');
			resolve()
		}, tempo)
	})
}

// esperarPor(2000)
// 	.then(() => console.log('Executando promise...'))
// 	.then(esperarPor)
// 	.then(() => console.log('Executando promise 2'))
// 	.then(esperarPor)

async function esperar() {
	await esperarPor(2000);
	console.log('Async/Await 1')

	await esperarPor(2000);
	console.log('Async/Await 3')

	await esperarPor(2000);
	console.log('Async/Await 2')
}

esperar();