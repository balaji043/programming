import { performance } from 'perf_hooks';
export namespace Utils {
	export const calculateTime = (): void => {
		const startTime = performance.now();
		const endTime = performance.now();
		console.log(`Took ${endTime - startTime} milliseconds`);
	};
}
