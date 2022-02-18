

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


