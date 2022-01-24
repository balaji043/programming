const countConstruct = (target: string, array: string[]): number => {
	if (target === '') return 1;
	let sum = 0;
	for (const prefix of array) {
		if (target.startsWith(prefix)) {
			const suffix: string = target.slice(prefix.length);
			sum = sum + countConstruct(suffix, array);
		}
	}
	return sum;
};
export const countConstructMain = () => {
	console.log(countConstruct('apple', ['ap', 'ple', 'app', 'le']));
};
