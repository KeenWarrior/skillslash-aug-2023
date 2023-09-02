let a = 100;
let b = 200;

console.log("Outside Top", a);
console.log("Outside Top", b);

{
    // let a = 10;
    // let b = 20;
    console.error("Inside", a);
    console.log("Inside", b);
}

console.log("Outside", a);
console.log("Outside", b);


