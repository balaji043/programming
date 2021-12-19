import { performance } from 'perf_hooks';
export namespace Utils {
	export const calculateTime = (fun: Function): void => {
		const startTime = performance.now();
		fun();
		const endTime = performance.now();
		console.log(`Took ${endTime - startTime} milliseconds`);
	};
}
