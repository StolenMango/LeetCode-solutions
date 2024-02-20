/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// So as a lot of things you want to start by sorting ascendingly, based on the start value
// then create a new array for the merged result
// if you have no overlap or there's an empty array then you just append it to the merged result
// else resolve the conflict by merging the two elements
// for the example of [1, 3] and [2, 6] the it should be something like "if i[1]<j[0]" then append, else
// pop i[1] append max (i, j)

var merge = function (intervals) {
  if (intervals.length === 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  let curr = intervals[0];
  const mergedIntervals = [curr];
  for (let i = 1; i < intervals.length; i += 1) {
    const currRight = curr[1];
    const [nextLeft, nextRight] = intervals[i];
    if (currRight >= nextLeft) {
      curr[1] = Math.max(currRight, nextRight);
    } else {
      mergedIntervals.push(intervals[i]);
      curr = intervals[i];
    }
  }
  return mergedIntervals;
};
