module.exports = function zeros(expression) {
  const expr= expression.split("*");
  let numberTwo = 0;
  let numberFive = 0;
	for (let i = 0; i < expr.length; i++) {
		const key = (expr[i][expr[i].length - 2] == "!") ? 2 : 1;
		expr[i] = parseInt(expr[i]);
		for (let j = expr[i]; j > 1; j -= key) {
			let result = j;
			while (result % 5 == 0) {
				numberFive++;
				result /= 5;
			}
			while (result % 2 == 0) {
				numberTwo++;
				result /= 2;
			}
		}
	}
	return Math.min(numberTwo, numberFive); 
}
