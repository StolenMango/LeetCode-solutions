/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // So as a lot of things you want to start by sorting ascendingly, based on the start value
    intervals.sort((a, b) => a[0] - b[0])
    // then create a new array for the merged result
    const mergedIntervals = [];
    // if you have no overlap or there's an empty array then you just append it to the merged result
    // else resolve the conflict by merging the two elements
        // for the example of [1, 3] and [2, 6] the it should be something like "if i[1]<j[0]" then append, else 
        // pop i[1] append max (i, j) 
    for (const interval of intervals) {
        if (merged.length === 0 )
    }
};

// So as a lot of things you want to start by sorting ascendingly
// then create a new array for the merged result
// if you have no overlap or there's an empty array then you just append it to the merged result
// else resolve the conflict by merging the two elements
// for the example of [1, 3] and [2, 6] the it should be something like "if i<j" then append, else
// pop i[1] append max (i, j)
