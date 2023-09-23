// https://leetcode.com/problems/concatenation-of-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const out = [];

    let count = 2;

    while(count > 0){
        let index = 0;
        while(index < nums.length){
            out.push(nums[index]);
            index = index + 1;
        }
        count = count - 1;
    }
 
    return out;
 
 };