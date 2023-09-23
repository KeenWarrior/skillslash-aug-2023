class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log("Hello from", this.name);
    }

    canVote() {
        return this.age >= 18;
    }

    party() {
        if(this.rich){
            console.log("Party all night long!");
        } else {
            console.log("Damn it");
        }
    }
}

let h1 = new Human("Anuj", 29);
let h2 = new Human("Ravi", 30);

h1.rich = true;

h2.party();

h1.sayHello();

h1.age = 18;

console.log(h1.canVote());


// console.log(h1.age);
// console.log(h2.age);