function swap(array, source, target) {
    const temp = array[source];
    array[source] = array[target];
    array[target] = temp;
}

function reverse(array) {

    let index = 0;

    while (index < (array.length / 2)) {
        swap(array, index, array.length - 1 - index);
        index++;
    }
}


const array = [1, 2, 3, 4, 5];

reverse(array);

console.log(array);
