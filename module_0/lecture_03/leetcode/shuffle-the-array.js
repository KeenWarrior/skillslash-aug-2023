/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {

    const out = [];

    let index = 0;

    while(index < n){
        out.push(nums[index]);
        out.push(nums[index+n])

        index = index + 1;
    }

    return out;

};