function division(a, b) {
    if(b === 0){
        throw new Error('Division by zero');
    }
    return a / b;
}

try{
    const c = division(10, 2);
    console.log(c);
} catch (e) {
    console.log(e.message);
} 







