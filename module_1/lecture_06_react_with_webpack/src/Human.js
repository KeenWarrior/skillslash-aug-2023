class Human {
    static population = 0;

    constructor(name) {
        this.name = name;
        Human.population++;
    }
}

const anuj = new Human("Anuj");
const anuj2 = new Human("Anuj2");
const anuj3 = new Human("Anuj3");

export default Human;