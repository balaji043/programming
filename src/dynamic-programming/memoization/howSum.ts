/**
 * write a function `howSum(targetSum, numbers)`
 * targetSum - a number
 * numbers - array of numbers
 * return an array containing combination of elements from
 * numbers array which sums up to be the targetSum
 *
 * if not possible return null
 * if multiple array combination exists return only one
 */

const howSum = (
	targetSum: number,
	numbers: number[],
	memo: any = {}
): number[] | null => {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;
	for (const num of numbers) {
		const reminder = targetSum - num;
		const value = howSum(reminder, numbers, memo);
		if (value !== null) {
			value.push(num);
			memo[targetSum] = value;
			return value;
		}
	}
	memo[targetSum] = null;
	return null;
};

const getHowSum = (n: number, numbers: number[]): void => {
	const startTime = performance.now();
	const ans = howSum(n, numbers);
	const endTime = performance.now();
	console.log(
		`can array [${numbers}] generate target sum of ${n}? ${
			ans ? 'yes' : 'no'
		} [${ans}]`
	);
	console.log(`Took ${endTime - startTime} milliseconds`);
};

function main() {
	getHowSum(9, [5, 3, 4, 7]);
	getHowSum(300, [7, 14]);
}
main();
