// Problem 1 Stack
class animalStack {
  constructor() {
    this.stack = [];
  }

  push(word) {
    return this.stack.push(word);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.length - 1];
  }

  get length() {
    return this.stack.length;
  }
}

const stack = new animalStack();
stack.push("fox");
stack.push("goose");
stack.push("lizard");
console.log(stack.pop()); // 'lizard'
console.log(stack.peek()); // 'goose'
console.log(stack.pop()); // 'goose'
stack.push("llama");
console.log(stack.pop()); // 'llama'
console.log(stack.peek()); // 'fox'
console.log(stack.pop()); // 'fox'
console.log(stack.pop()); // null

//Problem 2 Queue
class animalQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(food) {
    return this.queue.unshift(food);
  }

  dequeue() {
    return this.queue.pop();
  }

  hasNext() {
    if (this.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  get length() {
    return this.queue.length;
  }
}

const queue = new animalQueue();
queue.enqueue("fox");
queue.enqueue("goose");
queue.enqueue("lizard");
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue("llama");
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue()); // null
