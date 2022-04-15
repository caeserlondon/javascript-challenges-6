//////// CHALLENGE 1
// factoralize a number
/// solution 1
function factorialize(num) {
	let result = 1;
	for (let i = num; i > 0; i--) {
		result *= i;
	}
	return result;
}
console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));
