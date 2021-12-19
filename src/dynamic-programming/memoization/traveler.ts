import { performance } from 'perf_hooks';

// grid traveler problem
// GOAL     - to traverse from S to E
// MOVES    - DOWN or RIGHT
// [S][ ][ ]
// [ ][ ][E]

// grid represented by number of rows and columns
// grid(i, j)

// trivial examples
// grid(0, 0)   -> no ways
// grid(any, 0) -> no ways
// grid(0, any) -> no ways

// grid(1, 1)   -> only one way because S and E cell are the same.

// grid(3, 3)
// [S][ ][ ]
// [ ][ ][ ]
// [ ][ ][E]
// moves down (basically bcomes a gird(2, 3))
// [ ][ ][ ]
// [S][ ][ ]
// [ ][ ][E]

const getKey = (row: number, column: number): string => `${row},${column}`;
const gridTraveller = (row: number, column: number, memo: any = {}): number => {
	// if already calculated
	const key = getKey(row, column);
	if (key in memo) return memo[key];
	// if already calculated
	const keyR = getKey(column, row);
	if (keyR in memo) return memo[keyR];
	// trivial
	if (row === 0 || column === 0) return 0;
	if (row === 1 && column === 1) return 1;
	memo[key] =
		gridTraveller(row - 1, column, memo) + gridTraveller(row, column - 1, memo);
	return memo[key];
};
const getGridTravller = (row: number, column: number): void => {
	const startTime = performance.now();

	const ans = gridTraveller(row, column);
	const endTime = performance.now();

	console.log(`grid(${row}, ${column}) = ${ans}`);
	console.log(`Took ${endTime - startTime} milliseconds`);
};
function main() {
	// getGridTravller(0, 1);
	// getGridTravller(1, 0);
	// getGridTravller(1, 1);
	// getGridTravller(2, 1);
	// getGridTravller(2, 3);
	// getGridTravller(3, 3);
	getGridTravller(18, 18);
}
main();
