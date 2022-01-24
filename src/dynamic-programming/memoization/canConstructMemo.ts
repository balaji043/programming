import { BoolMemo } from './types';

const canConstructWithMemoization = (
	target: string,
	wrods: string[],
	memo: BoolMemo = {}
): boolean => {
	if (target in memo) return memo[target];
	if (target === '') return true;
	for (const prefix of wrods) {
		if (target.indexOf(prefix) === 0) {
			const suffix: string = target.slice(prefix.length);
			if (canConstructWithMemoization(suffix, wrods, memo)) {
				memo[suffix] = true;
				console.log({ suffix });
				return true;
			}
		}
	}
	memo[target] = false;
	return false;
};
export const canConstructWithMemoizationMain = () => {
	console.log(
		canConstructWithMemoization('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
			'e',
			'ee',
			'eee',
			'eee',
			'eeee',
			'eeeeeeeeeeeeee',
		])
	);
	console.log(
		canConstructWithMemoization('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
			'e',
			'ee',
			'eee',
			'eee',
			'eeee',
			'eeeeeeeeeeeeeef',
		])
	);
};
