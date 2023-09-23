function swap(array, source, target) {
  const temp = array[source];
  array[source] = array[target];
  array[target] = temp;
}


const array = [100, 30, 20, 10, 5];

swap(array, 1, 3);

console.log(array);