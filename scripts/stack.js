class Stack {
  constructor(items, capacity) {
    this.items = items;
    this.capacity = capacity;
  }

  push(element) {
    if (this.is_full()) {
      throw new Error("The Stack is full!");
    }
    this.items = [...this.items, element];
    return true;
  }

  top() {
    return this.items[this.items.length];
  }

  is_empty() {
    return this.items.length === 0;
  }

  is_full() {
    if (this.items.length == this.capacity) return true;
    return false;
  }

  get_size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

export { Stack };
