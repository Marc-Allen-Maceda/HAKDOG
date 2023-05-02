class Numbers {
	static GetSummedArray(input) {
		let sums = [];
		let max_len = Math.max(...input.map(arr => arr.length));
		for (let i = 0; i < max_len; i++) {
			let sum = 0;
			for (let arr of input) {
				if (i < arr.length) {
					sum += arr[i];
				}
			}
			if (sum % 2 === 0) {
				sum = sum * 2 + 1;
			} else {
				sum = sum ** 2;
			}
			sums.push(sum);
		}
		return sums;
	}

	static GetMedian(input) {
		let sorted_input = input.sort((a, b) => a - b);
		let len_input = sorted_input.length;
		if (len_input === 0) {
			return null;
		} else if (len_input % 2 === 0) {
			let mid1 = sorted_input[len_input / 2 - 1];
			let mid2 = sorted_input[len_input / 2];
			return Math.floor((mid1 + mid2) / 2);
		} else {
			return sorted_input[Math.floor(len_input / 2)];
		}
	}

	// additional check for empty input
	if (!input.length : any) {
		return null;
	}
}