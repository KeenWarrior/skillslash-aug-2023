// https://leetcode.com/problems/final-value-of-variable-after-performing-operations


/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    

    let index = 0;

    let result = 0;

    while(index < operations.length){
        const op = operations[index];

        if(op == "X++" || op == "++X"){
            result = result + 1;
        } else {
            result = result - 1;
        }

        index  = index + 1;
    }

    return result;
};