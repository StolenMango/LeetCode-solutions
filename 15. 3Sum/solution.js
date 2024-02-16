/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// case for nums.length<3 so that if there are less than 3 numbers it will return an empty string.
// sort the array ascendingly, in this case it would be [-4, -1, -1, 0, 1, 2]
// loop through, use 2 pointer to find 2 complement items
// skip duplicate value in the loop
var threeSum = function (nums) {
  const ans = [];
  if (nums.length < 3) return ans;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let start = i + 1,
      end = nums.length - 1;
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum === 0) {
        ans.push([nums[i], nums[start], nums[end]]);
        start += 1;
        end -= 1;
        while (start < end && nums[start] === nums[start - 1]) start += 1;
        while (start < end && nums[end] === nums[end + 1]) end -= 1;
      } else if (sum < 0) start += 1;
      else if (sum > 0) end -= 1;
    }
  }
  return ans;
};
