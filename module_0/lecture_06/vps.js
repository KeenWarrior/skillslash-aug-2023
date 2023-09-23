// we are allowed with [,{,(,),},]

class Stack {
    #items = [];
  
    constructor() {
      this.#items = [];
    }
  
    push(item) {
      this.#items.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.#items.pop();
    }
  
    top() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.#items[this.#items.length - 1];
    }
  
    isEmpty() {
      return this.#items.length === 0;
    }
  
    print() {
      console.log(this.#items.toString());
    }
  }
  

function isVPS(line) {
  const stack = new Stack();

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(ch);
    }

    if (stack.isEmpty()) {
      return false;
    }

    if (ch === ")" && stack.top() !== "(") {
      return false;
    }

    if (ch === "}" && stack.top() !== "{") {
      return false;
    }

    if (ch === "]" && stack.top() !== "[") {
      return false;
    }

    if(ch === ")" || ch === "}" || ch === "]" ){
        stack.pop();
    }
  }

  return stack.isEmpty();
}

console.log(isVPS("([()])"));
