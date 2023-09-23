class Human {

    static population = 0;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        Human.population = Human.population + 1;
    }

    static generateRandomHuman() {
        let name = "Human" + Math.floor(Math.random() * 100);
        let age = Math.floor(Math.random() * 100);
        return new Human(name, age);
    }
}

let anuj = new Human("Anuj", 29);

anuj.generateRandomHuman();

