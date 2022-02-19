

module.exports = function check(str, bracketsConfig) {
	let arrayCheck = bracketsConfig.map(x => x.join(''))
	let i = 0;
	while (i < arrayCheck.length) {
	let current = arrayCheck[i]
	if (str.includes(current)) {
	str = str.replace(current, '');
	i = 0;
	} else i++;
	}
	return str.length === 0;
	}