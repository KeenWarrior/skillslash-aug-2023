class Actor {
  alive = true;
  health = 10;
  name = "Actor";

  static actors = [];

  constructor(name) {
    this.name = name;
    Actor.actors.push(this);
  }
}

class Player extends Actor {
  killCount = 0;
  ammo = 3;
  constructor(name) {
    super(name);
  }

  #checkFeasible(actor) {
    if (this.ammo === 0) {
      console.log("Out of ammo");
      return false;
    } else if (!this.alive) {
      console.log("You are dead");
      return false;
    } else {
      return true;
    }
  }

  shoot(actor) {
    if(!this.#checkFeasible(actor)){
      return;
    }
  
    this.ammo--;

    if (!actor.alive) {
      console.log("Already dead");
      return;
    }

    if (this === actor) {
      console.log("Suicide is not allowed");
      return;
    }

    actor.health -= 5;

    if (actor.health <= 0) {
      actor.alive = false;
      if (actor instanceof Player && actor !== this) {
        this.killCount++;
        this.#pickAmmo(actor);
      }
    }
  }

  #pickAmmo(actor) {
    this.ammo += actor.ammo;
    actor.ammo = 0;
  }
}

class NPC extends Actor {
  constructor(name) {
    super(name);
  }
}

const p1 = new Player("Player 1");
const p2 = new Player("Player 2");
const npc1 = new NPC("NPC1");
const npc2 = new NPC("NPC2");

p1.shoot(p2);
p1.shoot(p2);
p1.shoot(npc1);

console.log(Actor.actors);
