function countDigits(num){ // 4323433
    let count = 0;

    while(num > 0){ 
        num = Math.floor(num/10);  // 0
        count = count + 1; // 7
    }

    return count;
}

const count = countDigits(4323433);

console.log(count);
