// canSum(7, [5, 3, 4, 7])
// canSum(targetSum, array)
// GOAL -> return true if possible to generate the tragetSum using numbers from array;
//                      7
// (7-5)=2      (7-3)=4     (7-4)=3     (7-7)=0
// no further   (4-4)=0     (3-3)=0     no further
import { performance } from 'perf_hooks';

const canSum = (
	targetSum: number,
	numbers: number[],
	memo: any = {}
): boolean => {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return true;
	if (targetSum < 0) return false;
	for (const num of numbers) {
		const reminder = targetSum - num;
		if (canSum(reminder, numbers, memo)) {
			memo[targetSum] = true;
			return true;
		}
	}
	memo[targetSum] = false;
	return false;
};

const getCanSum = (n: number, numbers: number[]): void => {
	const startTime = performance.now();
	const ans = canSum(n, numbers);
	const endTime = performance.now();
	console.log(
		`can array [${numbers}] generate target sum of ${n}? ${ans ? 'yes' : 'no'}`
	);
	console.log(`Took ${endTime - startTime} milliseconds`);
};

function main() {
	getCanSum(300, [5, 3, 4, 7]);
	getCanSum(300, [7, 14]);
}
main();
