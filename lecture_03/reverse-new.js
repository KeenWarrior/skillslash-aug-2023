function reverse(array){

    const out = [];

    let index = array.length - 1;

    while (index >= 0){
        out.push(array[index]);
        index--;
    }

    return out;

}

const arr = [1, 2, 3, 4, 5];

const reveresed = reverse(arr);

console.log(reveresed);



