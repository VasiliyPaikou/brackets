module.exports = function check(str, bracketsConfig) {
	let arrayCheck = bracketsConfig.map(x => x.join(''))
	let i = 0;
	while (i < arrayCheck.length) {
	if (str.includes(arrayCheck[i])) {
	str = str.replace(arrayCheck[i], '');
	i = 0;
	} else i++;
	}
	return str.length === 0;
	}