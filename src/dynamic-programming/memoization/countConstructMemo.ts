import { IntMemo } from './types';

const countConstructMemo = (
	target: string,
	array: string[],
	memo: IntMemo = {}
): number => {
	if (target in memo) return memo[target];
	if (target === '') return 1;
	let sum = 0;
	for (const prefix of array) {
		if (target.startsWith(prefix)) {
			const suffix: string = target.slice(prefix.length);
			sum = sum + countConstructMemo(suffix, array, memo);
		}
	}
	memo[target] = sum;
	return sum;
};
export const countConstructMemoMain = () => {
	console.log(countConstructMemo('apple', ['ap', 'ple', 'app', 'le']));
	console.log(
		countConstructMemo('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
			'e',
			'ee',
			'eee',
			'eee',
			'eeee',
			'eeeeeeeeeeeeeef',
		])
	);
};
