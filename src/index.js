// module.exports = function check(str, bracketsConfig) {
//   // your solution
// }

// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

// let str = '111115611111111222288888822225577877778775555666677777777776622222'

function check(str) {


	function isClosedBrecket(ch) {
		return [')', ']', '}', '2', '4', '6'].indexOf(ch) > -1; //проверяет является ли скобка закрывающей
	}
	let count = 0
	let count7 = 0
	let count8 = 0
	let stack = []
	let breckets = {
		')': '(',
		'}': '{',
		']': '[',
		'|': '|',
		'2': '1',
		'4': '3',
		'6': '5',
		'7': '7',
		'8': '8',
	}

	for (let i = 0; i < str.length; i++) {
		const current = str[i]
		if (current == '|' && count % 2 == 0) {
			stack.push(current)
			count += 1
			continue
		} else if (current == '|' && count % 2 !== 0) {
			if (current !== stack.pop())
				return 'false'
			count += 1
			continue
		}
		if (current == '7' && count7 % 2 == 0) {
			stack.push(current)
			count7 += 1
			continue
		} else if (current == '7' && count7 % 2 !== 0) {
			if (current !== stack.pop())
				return 'false'
			count7 += 1
			continue
		}
		if (current == '8' && count8 % 2 == 0) {
			stack.push(current)
			count8 += 1
			continue
		} else if (current == '8' && count8 % 2 !== 0) {
			if (current !== stack.pop())
				return 'false'
			count8 += 1
			continue
		}
		if (isClosedBrecket(current)) {

			if (breckets[current] !== stack.pop())
				return 'false'

		} else {
			stack.push(current)
		}

	}
	return stack.length === 0


}

console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))'));



// function check(str) {
// 	let lineBrackets = [];
// 	let y = [];
// 	let x = [];
// 	let stack = []
// 	let brackets = {
// 		')': '(',
// 		'}': '{',
// 		']': '[',
// 		'5': '6',
// 	}
// 	if (str.length === 0) {
// 		return false
// 	}
// 	for (let i = 0; i < str.length; i++) {
// 		let current = str[i]
// 		if (current === '|') {
// 			lineBrackets.push(current)
// 			continue;
// 		} else if (current === '7') {
// 			y.push(current);
// 			console.log(y);
// 			continue;
// 		} else if (current === '8') {
// 			x.push(current);
// 			continue;
// 		}
// 		if (isClosedBracket(current)) {
// 			if (brackets[current] !== stack.pop()) return false
// 		} else {
// 			stack.push(current);
// 		}
// 	}
// 	console.log(stack);
// 	console.log(lineBrackets)
// 	if (lineBrackets.length === 0 && (y.length === 0 && x.length === 0)) {
// 		return stack.length === 0;
// 	} else if (lineBrackets.length % 2 === 0) {
// 		return stack.length === 0;
// 	} else if (y.length % 2 === 0 && x.length % 2 === 0) {
// 		return stack.length === 0;
// 	} return false
// }

// function isClosedBracket(ch) {
// 	return [')', ']', '}', '6'].indexOf(ch) > -1;
// }

// console.log(check('7'));
