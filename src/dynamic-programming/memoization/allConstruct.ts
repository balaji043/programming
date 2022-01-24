const allConstruct = (target: string, words: string[]): string[][] => {
	if (target === '') return [[]];
	const result = [];
	for (const word of words) {
		if (target.indexOf(word) === 0) {
			const suffix = target.slice(word.length);
			const allSuffixWays = allConstruct(suffix, words);
			const targetWays = allSuffixWays.map((e) => [word, ...e]);
			result.push(...targetWays);
		}
	}
	return result;
};
export const allConstructMain = () => {
	console.log(allConstruct('apple', ['ap', 'ple', 'app', 'le']));
};
