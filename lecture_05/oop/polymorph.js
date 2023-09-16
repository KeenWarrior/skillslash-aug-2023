class Animal {

    legs = 4;

    eat(){
        console.log("eating...");
    }

    sleep(){
        console.log("sleeping...");
    }

    walk(){
        console.log("walking...");
    }
}

class Human extends Animal {

    // Overriding
    eat(){
        console.log("eating as human...");
    }

    // Overloading is not available
    // this will replace
    eat(food){
        console.log(" Now eating " + food + " as human...");
    }
}

const h1 = new Human();

h1.eat();