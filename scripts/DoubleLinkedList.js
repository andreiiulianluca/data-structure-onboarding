function DoubleLinkedNode(value) {
  this.value = value;
  this.prev = null;
  this.next = null;
}

function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

Object.assign(DoubleLinkedList.prototype, {
  insertFirst: function (value) {
    const newNode = new DoubleLinkedNode(value);
    this.length++;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  },

  deleteFirst: function () {
    if (!this.head) {
      return null;
    }

    this.length--;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    return true;
  },

  insertLast: function (value) {
    const newNode = new DoubleLinkedNode(value);
    this.length++;

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  },

  deleteLast: function () {
    if (!this.tail) {
      return null;
    }

    this.length--;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    return true;
  },

  insertAfter: function (nodeValue, newValue) {
    let currentNode = this.head;

    while (currentNode !== null && currentNode.value !== nodeValue) {
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      throw new Error(
        "The targeted value was not found. We could not insert your value!"
      );
    }

    const newNode = new DoubleLinkedNode(newValue);
    this.length++;

    newNode.next = currentNode.next;
    newNode.prev = currentNode;

    if (currentNode.next === null) {
      this.tail = newNode;
    } else {
      currentNode.next.prev = newNode;
    }

    currentNode.next = newNode;
    return true;
  },

  deleteNode: function (value) {
    let nodeToBeDeleted = this.head;

    while (nodeToBeDeleted !== null && nodeToBeDeleted.value !== value) {
      nodeToBeDeleted = nodeToBeDeleted.next;
    }

    if (nodeToBeDeleted === null) return false;

    if (nodeToBeDeleted === this.head) return this.deleteFirst();

    if (nodeToBeDeleted === this.tail) return this.deleteLast();

    this.length--;
    nodeToBeDeleted.prev.next = nodeToBeDeleted.next;
    nodeToBeDeleted.next.prev = nodeToBeDeleted.prev;
    return true;
  },

  displayForward: function () {
    const elements = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      elements.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return elements;
  },

  displayBackward: function () {
    const elements = [];
    let currentNode = this.tail;

    while (currentNode !== null) {
      elements.push(currentNode.value);
      currentNode = currentNode.prev;
    }

    return elements;
  },
});
