/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let area = 0,
    i = 0,
    j = height.length - 1;
  while (i < j) {
    const temp = (j - i) * Math.min(height[i], height[j]);
    area = Math.max(area, temp);
    if (height[i] > height[j]) {
      j -= 1;
    } else {
      i += 1;
    }
  }
  return area;
};

// we are given an array with n positive integers (i.e. the lines)
// in this example n=9
// it wants me to find the maximum area for the input height.
// If height is y and length is x then in the example given x=7 and y=7. Therefore 49.
// We essentially want a function that will check the x distance between each bar
// then multiply it by the lowest height available between the 2 end points
// In this example: 2 - 9 = (-7) and lowest of (8,7) is 7.
// Logically I should probably move either j or i based on which is smaller since moving the larger number has
// a higher chance at lowering the volume
