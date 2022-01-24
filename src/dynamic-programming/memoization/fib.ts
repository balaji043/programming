// fibonacci series

// [1, 2, 3, 4, 5, 6, 7] --- index
// [1, 1, 2, 3, 5, 8, 13] -- fib numbers
// f[i] = f[i-1] + f[i-2]

export namespace RecursiveFib {
	// O(2^n)
	export const fib = (n: number): number => {
		if (n <= 2) return 1;
		return fib(n - 1) + fib(n - 2);
	};

	export const getFib = (n: number): void => {
		const fibNumber = fib(n);
		console.log(`${n}th fib number is ${fibNumber}`);
	};

	export const callExamples = () => {
		getFib(12);
		getFib(11);
		getFib(14);
		getFib(8);
	};
}

export namespace MomoizedFib {
	// O(2^n)
	const fib = (n: number): number => {
		const mfib = (n: number, memory: any = {}): number => {
			if (n in memory) {
				return memory[n];
			}
			if (n <= 2) return 1;
			memory[n] = mfib(n - 1, memory) + mfib(n - 2, memory);
			return memory[n];
		};
		return mfib(n);
	};
	const getFib = (n: number): void => {
		const fibNumber = fib(n);
		console.log(`${n}th fib number is ${fibNumber}`);
	};
	export const callExamples = () => {
		getFib(50);
	};
}

//		 root
// left 		right

// f stack

// f(root) pushed to stack

// f(left) pushed to stack
// f(left) returns a value
// f(left) popped from stack

// f(right) -> pushed to stack
// f(right) returns a value
// f(right) popped from stack

// f(root) returns a value
// f(root) popped from stack
// O(n) space
