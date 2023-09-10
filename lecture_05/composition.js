class Engine {
  start() {
    console.log("Starting engine");
  }

  stop() {
    console.log("Stopping engine");
  }
}

class NitroEngine extends Engine {
  start() {
    console.log("Starting nitro engine");
  }

  stop() {
    console.log("Stopping nitro engine");
  }
}

class Break {
  apply() {
    console.log("Applying break");
  }
}

class Car {
  #engine;
  #break;

  constructor(engine = new Engine(), breakObj = new Break()) {
    this.#engine = engine;
    this.#break = breakObj;
  }

  start() {
    console.log("Starting car");
    this.#engine.start();
  }

  stop() {
    console.log("Stopping car");
    this.#break.apply();
    this.#engine.stop();
    console.log("Car stopped");
  }

  break() {
    console.log("Applying break");
    this.#break.apply();
  }
}

const nitroEngine = new NitroEngine();
const car = new Car(nitroEngine);

car.start();
car.stop();
