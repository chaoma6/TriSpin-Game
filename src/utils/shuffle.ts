const shuffleArray = (array: string[]) => {
	// 从最后一项开始循环，依次将元素与随机位置的元素交换位置
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1)); // 生成 0 到 i 之间的随机数
		[array[i], array[j]] = [array[j], array[i]]; // 交换当前元素和随机位置的元素
	}
	return array; // 返回打乱后的数组
};

export default shuffleArray;