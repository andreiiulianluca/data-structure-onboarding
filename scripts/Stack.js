function Stack(items = [], capacity) {
  this.items = items;
  this.capacity = capacity;
}

Object.assign(Stack.prototype, {
  pushElement: function (element) {
    if (this.checkIsFull()) {
      throw new Error("The Stack is full!");
    }
    this.items.push(element);
    return true;
  },

  popElement: function () {
    if (this.checkIsEmpty()) {
      throw new Error("The Stack is empty!");
    }
    return this.items.pop();
  },

  getTop: function () {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  },

  checkIsEmpty: function () {
    return this.items.length === 0;
  },

  checkIsFull: function () {
    return this.items.length === this.capacity;
  },

  getSize: function () {
    return this.items.length;
  },

  getItems: function () {
    return this.items;
  },

  clearStack: function () {
    this.items = [];
  },
});
