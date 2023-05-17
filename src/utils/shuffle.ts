/*
打乱数组顺序的函数ShuffleArray

循环从最后一项开始，使用变量 i 表示当前元素的索引。循环条件是 i > 0，即到达数组的第一个元素停止循环。
在循环中，使用 Math.random() 生成一个介于 0 到 i 之间的随机数，使用 Math.floor() 向下取整确保获得整数值。这个随机数作为随机位置的索引，用变量 j 表示。
使用解构赋值 [array[i], array[j]] = [array[j], array[i]]，将当前元素和随机位置的元素进行交换。这样可以实现打乱数组顺序的效果。
循环结束后，函数返回打乱后的数组 array。
*/

const shuffleArray = (array: string[]) => {
	// Loop from the last item and swap each element with a randomly chosen element
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1)); // Generate a random number between 0 and i
		[array[i], array[j]] = [array[j], array[i]]; // Swap the current element with the element at the random position
	}
	return array; // Return the shuffled array
};

export default shuffleArray;
