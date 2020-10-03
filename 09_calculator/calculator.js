function add (m=0, n =0) {
	return m + n;
}

function subtract (m=0, n =0) {
	return m - n;
}

function sum ([...nums])  { 
	let sum = 0;
	for (let num of nums) sum += num;
	return parseInt(sum);
  }
  
// console.log(sum([01,3,5,7,9]))

function multiply ([...nums]) { 
	let sum = 1;
	for (let num of nums) sum *= num;
	return parseInt(sum);
}

// console.log(multiply([2,4]))

function power(m=0, n =0) {
	return m ** n;
}

function factorial(n) {
	return n ? n * factorial(n - 1) : 1;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}