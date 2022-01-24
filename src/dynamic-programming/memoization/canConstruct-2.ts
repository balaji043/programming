const canConstruct = (target: string, array: string[]): boolean => {
	if (target === '') return true;
	for (const prefix of array) {
		if (target.startsWith(prefix)) {
			const suffix: string = target.slice(prefix.length);
			const ans: boolean = canConstruct(suffix, array);
			if (ans) {
				return true;
			}
		}
	}
	return false;
};
export const canConstructMain = () => {
	console.log(canConstruct('apple', ['ap', 'ple', 'app', 'le']));
};
