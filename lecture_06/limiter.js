class MyQueue {
  #items = [];

  enqueue(item) {
    this.#items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.#items.shift();
  }

  front() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.#items[0];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  get size() {
    return this.#items.length;
  }
}

// only 3 req in 3000 miliseconds
function limiter(times) {
  let queue = new MyQueue();

  const result = [];

  for (const time of times) {
    while (!queue.isEmpty() && queue.front() < time - 3000) {
      queue.dequeue();
    }

    if (queue.size >= 3) {
      result.push(false);
      continue;
    }

    queue.enqueue(time);
    result.push(true);
  }

  return result;
}

const arr = [1, 100, 200, 300, 3001, 3002, 7000];

console.log(limiter(arr));
