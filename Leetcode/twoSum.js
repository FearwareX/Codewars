/* eslint-disable no-unused-vars */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
};
