class Human {
    #moveHand(direction) {
        console.log("Moving hand to " + direction);
    }

    #moveLeg(direction) {
        console.log("Moving leg to " + direction);
    }

    walk() {
        this.#moveHand("left");
        this.#moveHand("right");
        this.#moveLeg("left");
        this.#moveLeg("right");
    }

    dance() {
        this.#moveHand("left");
        this.#moveLeg("left");
        this.#moveHand("right");
        this.#moveLeg("right");
    }
}

const h1 = new Human();

h1.walk();




