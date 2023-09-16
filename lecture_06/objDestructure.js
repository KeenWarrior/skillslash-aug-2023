const human = {
    name: 'John',
    age: 10,
    position: 'Developer',
    phone: '1234567890',
}

// const name = human.name;
// const age = human.age;
// const position = human.position;
// const phone = human.phone;

const { name, age, position, phone } = human;

const anotherHuman = {
    ...human
}

anotherHuman.name = 'Jane';

console.log(human);
console.log(anotherHuman);


