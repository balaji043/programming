const allConstructMemo = (
	target: string,
	words: string[],
	memo: any = {}
): string[][] => {
	if (target in memo) return memo[target];
	if (target === '') return [[]];
	const result = [];
	for (const word of words) {
		if (target.indexOf(word) === 0) {
			const suffix = target.slice(word.length);
			const allSuffixWays = allConstructMemo(suffix, words, memo);
			const targetWays = allSuffixWays.map((e) => [word, ...e]);
			result.push(...targetWays);
		}
	}
	memo[target] = result;
	return result;
};
export const allConstructMemoMain = () => {
	console.log(allConstructMemo('apple', ['ap', 'ple', 'app', 'le']));
};
