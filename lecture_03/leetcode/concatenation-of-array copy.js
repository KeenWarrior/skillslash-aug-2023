// https://leetcode.com/problems/concatenation-of-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
 
    let index = 0;
    let length = nums.length;
    while(index < length){
        nums.push(nums[index]);
        index = index + 1;
    }
 
    return nums;
 
 };