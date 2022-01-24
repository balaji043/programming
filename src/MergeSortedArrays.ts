// 1) Iterate through every element of ar2[] starting from last
//    element. Do following for every element ar2[i]
//     a) Store last element of ar1[i]: last = ar1[i]
//     b) Loop from last element of ar1[] while element ar1[j] is
//        greater than ar2[i].
//           ar1[j+1] = ar1[j] // Move element one position ahead
//           j--
//     c) If any element of ar1[] was moved or (j != m-1)
//           ar1[j+1] = ar2[i]
//           ar2[i] = last

const merge2 = (array1: number[], array2: number[]) => {
	console.log('sorting arrays');
	console.log(array1);
	console.log(array2);
	for (let i = array2.length - 1; i >= 0; i--) {
		let j: number;
		let lastElementOfArray1 = array1[array1.length - 1];
		for (j = array1.length - 2; j > 0 && array1[j] > array2[i]; j--) {
			array1[j + 1] = array1[j];
		}
		if (j != array1.length - 2 || lastElementOfArray1 > array2[i]) {
			array1[j + 1] = array2[i];
			array2[i] = lastElementOfArray1;
		}
	}
	console.log('sorted arrays');
	console.log(array1);
	console.log(array2);
};

const mergeWithGap2 = (array1: number[], array2: number[]) => {
	console.log({ array1 });
	console.log({ array2 });
	console.log('Array 1: ' + array1.length);
	console.log('Array 2: ' + array2.length);
	let n = array1.length + array2.length;
	console.log('Total 1: ' + n);
	let gap = Math.floor(n / 2) + (n % 2);

	while (gap != 0) {
		console.log('Gap: ' + gap);
		for (let i = 0, j = gap + i; ; i++, j++) {
			if (j > array2.length) {
				gap = Math.floor(gap / 2) + (gap % 2);
				break;
			}
			if (gap <= 1) {
				gap = 0;
				break;
			}
			console.log({ i, j });
		}
	}
};

mergeWithGap([1, 5, 9, 10, 15, 20], [2, 3, 8, 13]);
