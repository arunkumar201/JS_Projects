
const splitIntoArrays=(arr, splitSize=1) => {
	if (!Array.isArray(arr)||arr.length<1||splitSize<1) return [];
	const result=[];
	for (let i=0;i<arr.length;i++) {
		let group=[];

		for (let j=0;j<splitSize;j++) {
			if (i+j>=arr.length) break;
			group.push(arr[i+j]);
		}
		result.push(group);
	    i+=splitSize-1;
		group=[];
	}
	return result;
}

const splitIntoArraysShorter=(arr, splitSize=1) => {
	if (!Array.isArray(arr)||arr.length<1||splitSize<1) return [];
	

	const result=[];



	for (let i=0;i<arr.length;i++){
		result.push(arr.slice(i, i+splitSize));
		i+=splitSize-1;
	}
	return result;
}


const arr2=[1, 2, 3, 4, 5];
console.log(splitIntoArrays(arr2, 3)); //[[1,2,3], [4,5]]

const arr3=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(splitIntoArrays(arr3, 4)); //[[1,2,3,4], [5,6,7,8], [9,10,11,12]]

const arr4=[];
console.log(splitIntoArrays(arr4, 2)); //[]

const arr5=[1];
console.log(splitIntoArrays(arr5, 2)); //[[1]]

const arr6=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(splitIntoArrays(arr6, 0)); //[]
console.log(splitIntoArrays(arr6, -1)); //[]



//using shorter way 
console.log("-----------     --------------")
console.log(splitIntoArraysShorter(arr2, 3)); //[[1,2,3], [4,5]]

console.log(splitIntoArraysShorter(arr3, 4)); //[[1,2,3,4], [5,6,7,8], [9,10,11,12]]

console.log(splitIntoArraysShorter(arr4, 2)); //[]

console.log(splitIntoArraysShorter(arr5, 2)); //[[1]]

console.log(splitIntoArraysShorter(arr6, 0)); //[]
console.log(splitIntoArraysShorter(arr6, -1)); //[]
