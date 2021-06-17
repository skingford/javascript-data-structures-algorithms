/**
 * 栈数据：先进后出
 */

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 1;
  }
  clear() {
    this.items = [];
  }
  size() {
    return this.items.length;
  }
}

const s = new Stack();

s.push(1);
s.push(2);
s.push(3);
console.log(s.items);
console.log(s.isEmpty());
console.log(s.size());
