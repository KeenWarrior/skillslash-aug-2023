class Human {
  name = "";
  #age = 0;
  #money = 0;

  constructor(name, age) {
    this.name = name;
    this.#age = age;
    this.#money = 1000;
  }

  get money() {
    return this.#money;
  }

  set age(age) {
    if (age < 0) {
      console.log("Age cannot be negative");
    } else {
      this.#age = age;
    }
  }

  get age() {
    return this.#age;
  }
}

const anuj = new Human("Anuj", 29);

anuj.age = 30;

console.log(anuj.age);

