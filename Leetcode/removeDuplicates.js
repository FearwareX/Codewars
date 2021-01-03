const removeDuplicates = (nums) => {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  let i = 0; // 慢指针
  for (let j = 1; j < nums.length; j += 1) {
    if (nums[j] !== nums[i]) {
      nums[i + 1] = nums[j];
      i += 1;
    }
  }
  return i + 1;
};

console.log(removeDuplicates([1, 1, 2]));
