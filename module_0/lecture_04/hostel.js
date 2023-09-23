class Hosteler {
  constructor(name, money) {
    this.name = name;
    this.money = money;
  }

    party() {
        if(this.money >= 100){
            this.money = this.money - 100;
            console.log("Party all night long!");
        } else {
            console.log("Damn it");
        }
    }

    borrowMoney(hosteler) {
        if(hosteler.money >= 200) {
            this.money = this.money + 200;
            hosteler.money = hosteler.money - 200;
        } else {
            console.log("Sorry, I don't have money");
        }
    }
}

const ravi = new Hosteler("Ravi", 300);

ravi.party();
ravi.party();
ravi.party();
ravi.party();

const anuj = new Hosteler("Anuj", 1000);

ravi.borrowMoney(anuj);

console.log(ravi.money);
console.log(anuj.money);

ravi.party();
ravi.party();
ravi.party();