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

function pings(times) {    
    let queue = new MyQueue();

    const result = [];

    for(const time of times){
        queue.enqueue(time);

        while((queue.front() < (time - 3000)) && !queue.isEmpty()){
            queue.dequeue();
        }

        result.push(queue.size);
    }

    return result;
};

const arr = [1, 100, 3001, 3002, 7000];

console.log(pings(arr));