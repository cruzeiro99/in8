function menorInteiro(number=1) {
	let result = (number % 2) + (number & 3) + (number % 10);
	if (result === 0)
		return number;
	else 
		return menorInteiro(++number);
}

console.log("Menor inteiro:", menorInteiro());