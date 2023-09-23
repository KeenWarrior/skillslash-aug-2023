// https://leetcode.com/problems/build-array-from-permutation/description/


/**
 * @param {number[]} nums
 * @return {number[]}
 */

var buildArray = function(nums) {
    let out = new Array(nums.length);

    let i = 0;

    while(i < nums.length){
        out[i] = nums[nums[i]];
        i = i + 1;
    }

    return out;
    
};