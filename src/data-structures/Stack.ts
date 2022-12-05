export default class Stack {
  readonly array: number[];

  constructor() {
    this.array = [];
  }

  add(...nums: number[]) {
    this.array.push(...nums);
    return this.array;
  }

  remove() {
    this.array.pop();
    return this.array;
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  isEmpty() {
    return this.array.length === 0;
  }

  size() {
    return this.array.length;
  }

  clear() {
    this.array.length = 0;
    return this.array;
  }
}
