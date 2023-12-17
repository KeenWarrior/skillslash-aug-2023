class Human {
  private name: string = "";
  private age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and age is ${this.age}`);
  }
}

const anuj = new Human("Anuj Garg", 20);
const ravi = new Human("Ravi Kumar", 30);

anuj.sayHello();
ravi.sayHello();
