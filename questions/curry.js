const sum = (a) => {
	return function (b) {
		return a + b;
	};
};

const InfiniteSum = (a) => {
	return function (b) {
		if (b === undefined) return a;
		return InfiniteSum(a + b);
	};
};

//sum with any args
const sumWithAnyArgs = (...args) => {
	let sumWithAnyArgsSum = 0;
	for (const arg of args) {
		sumWithAnyArgsSum += arg;
	}

	return function innerFunc(...nextArgs) {
		if (nextArgs.length === 0) return sumWithAnyArgsSum;
		for (const arg of nextArgs) {
			sumWithAnyArgsSum += arg;
		}
		return innerFunc;
	}
};

//sum(2)(2) = 4
console.log(sum(2)(299));

//now we could have infinite currying with similar sum
const result = InfiniteSum(2)(3)(4)(5)(6)(7)(8)(9)(10)(4);
console.log("Infinite Sum result is : ", result);

//now if we could have any number of args on each function call
const resultSumWithAnyArgs = sumWithAnyArgs(2, 2, 3)(3, 3, 4)(4, 4, 5)(5, 5, 4)(6)(7)(8)(9)(10)(4)();
console.log("Result of sum with any args is : ", resultSumWithAnyArgs);
