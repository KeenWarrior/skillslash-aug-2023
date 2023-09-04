function countFive(num){ 
    let count = 0;
 

    while(num > 0){ 
        const rem = num % 10;
        num = Math.floor(num/10); 
        if(rem == 5){
            count = count + 1;
        }
    }

    return count;
}

const count = countFive(4523435);

console.log(count);
