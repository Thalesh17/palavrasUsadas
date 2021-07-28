function somar(valor1) {
	return function(valor2) {
		return function() {
			const resultado = valor1 + valor2
			console.log(resultado)
			return resultado
		}
	}
}

const somar1 = somar(1);
const numero2 = somar1(2);

numero2();

function calculo(valor1) {
		return function(valor2) {
			return function(fn) {
				return fn(valor1, valor2);
			}
		}
}

function multiplicar(valor1, valor2) {
	console.log(valor1 * valor2)
	return valor1 * valor2
}

const teste1 = calculo(2);
const teste2 = teste1(5);
const teste3 = teste2(multiplicar);
