//////// CHALLENGE 1
// factoralize a number
/// solution 1
// function factorialize(num) {
// 	let result = 1;
// 	for (let i = num; i > 0; i--) {
// 		result *= i;
// 	}
// 	return result;
// }
// console.log(factorialize(5));
// console.log(factorialize(10));
// console.log(factorialize(20));
// console.log(factorialize(0));

//////////////////
// /// solution 2
// function factorialize(num) {
// 	if (num === 0) {
// 		return 1;
// 	}
// 	return num * factorialize(num - 1);
// }
// console.log(factorialize(5));
// console.log(factorialize(10));
// console.log(factorialize(20));
// console.log(factorialize(0));

///////////////////////
/// solution 3
// function factorialize(num) {
// 	for (var x = 1; num >= 1; num--) {
// 		x *= num;
// 	}
// 	return x;
// }
// console.log(factorialize(5));
// console.log(factorialize(10));
// console.log(factorialize(20));
// console.log(factorialize(0));

////////////////////////////////////////

/// chalenge 2 : capitalize the first letters
/// /// solution 1
// function capitalize(str) {
// 	let tempArr = str.toLowerCase().split(" ");
// 	let result = tempArr.map((val) =>
// 		val.replace(val.charAt(0), val.charAt(0).toUpperCase())
// 	);
// 	return result.join(" ");
// }
// console.log(capitalize("I'm a little tea pot"));
// console.log(capitalize("caeser ibrahim"));

//////////////////
//// /// solution 2
function capitalize(str) {
	str = str.split(" ");

	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].toLowerCase().split("");

		str[i][0] = str[i][0].toUpperCase();

		str[i] = str[i].join("");
	}
	return str.join(" ");
}

console.log(capitalize("I'm a little tea pot"));
console.log(capitalize("caeser ibrahim"));
