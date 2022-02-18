// module.exports = function check(str, bracketsConfig) {
// 	let sum = 0;
// 	let up = [];
// 	let down = [];
// 	let squance = [];
// 	let oper = false;
// 	for (type of bracketsConfig){
// 	  up.push(type[0]);
// 	  down.push(type[1]);
// 	};
 
// 	for (let i = 0; i < str.length; i++){
// 	  oper = false;
// 	  if (up.indexOf(str[i]) !== -1) {
// 		 if (up[up.indexOf(str[i])] === down[up.indexOf(str[i])]){
// 			if (squance[squance.length - 1] === str[i]){
// 			oper = false;
// 			}else{
// 			oper = true;
// 			squance.push(down[up.indexOf(str[i])]);
// 			sum++;   
// 			};
// 		 } else{
// 		 squance.push(down[up.indexOf(str[i])]);
// 		 sum++;
// 		 }
// 	  }
// 	  if (down.indexOf(str[i]) !== -1 && !oper){
// 		 sum--;
// 		 if (sum < 0) {
// 			return false;
// 		 }
// 		 if (squance[squance.length - 1] === str[i]) {
// 			squance.splice(squance.length - 1, 1);
// 		 }else{
// 			return false;
// 		 }

// 	  }


// 	}
// 	return (sum === 0)? true: false;
//  }

module.exports = function check(str, bracketsConfig) {

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
				return false
			count += 1
			continue
		}
		if (current == '7' && count7 % 2 == 0) {
			stack.push(current)
			count7 += 1
			continue
		} else if (current == '7' && count7 % 2 !== 0) {
			if (current !== stack.pop())
				return false
			count7 += 1
			continue
		}
		if (current == '8' && count8 % 2 == 0) {
			stack.push(current)
			count8 += 1
			continue
		} else if (current == '8' && count8 % 2 !== 0) {
			if (current !== stack.pop())
				return false
			count8 += 1
			continue
		}
		if (isClosedBrecket(current)) {

			if (breckets[current] !== stack.pop())
				return false

		} else {
			stack.push(current)
		}

	}
	return stack.length === 0


}

