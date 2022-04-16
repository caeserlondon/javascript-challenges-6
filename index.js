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
// function capitalize(str) {
// 	str = str.split(" ");

// 	for (let i = 0; i < str.length; i++) {
// 		str[i] = str[i].toLowerCase().split("");

// 		str[i][0] = str[i][0].toUpperCase();

// 		str[i] = str[i].join("");
// 	}
// 	return str.join(" ");
// }

// console.log(capitalize("I'm a little tea pot"));
// console.log(capitalize("caeser ibrahim"));

//////////////////////////////////

//////// Challenge 3
///return the hightest number  from each array into a newc array
let numArr = [
	[583, 999, 113, 55],
	[600, 187, 798, 444],
	[1023, 77, 832, 285],
	[83, 99, 113, 555],
];
/////solution 1
// function hightestNumber(arr) {
// 	let result = [];
// 	for (let n = 0; n < arr.length; n++) {
// 		let largestNum = arr[n][0];
// 		for (let sub = 1; sub < arr[n].length; sub++) {
// 			if (arr[n][sub] > largestNum) {
// 				largestNum = arr[n][sub];
// 			}
// 		}
// 		result[n] = largestNum;
// 	}
// 	return result;
// }
// console.log(hightestNumber(numArr));

////////////////////////

/////solution 1
function hightestNumber(arr) {
	return arr.map(function (group) {
		return group.reduce(function (prev, current) {
			return current > prev ? current : prev;
		});
	});
}

console.log(hightestNumber(numArr));
