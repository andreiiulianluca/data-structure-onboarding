const createNode = (data) => ({
  data,
  prev: null,
  next: null,
});

export const doubleLinkedList = () => {
  let head = null;
  let tail = null;
  return {
    insertFirst: (data) => {
      const newNode = createNode(data);

      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        newNode.next = head;
        head.prev = newNode;
        head = newNode;
      }
    },
    deleteFirst: () => {
      if (!head) {
        return null;
      } else {
        head = head.next;
        head.prev = null;
      }
      return true;
    },
    insertLast: (data) => {
      const newNode = createNode(data);

      if (!tail) {
        tail = newNode;
      } else {
        newNode.prev = tail;
        tail.next = newNode;
        tail = newNode;
      }
    },
    deleteLast: () => {
      if (!tail) {
        return null;
      } else {
        tail = tail.prev;
        tail.next = null;
        return true;
      }
    },
    insertAfter: (nodeData, newData) => {
      let currentNode = head;

      while (currentNode !== null && currentNode.data !== nodeData) {
        currentNode = currentNode.next;
      }

      if (currentNode === null) return false;

      const newNode = createNode(newData);

      newNode.next = currentNode.next;
      newNode.prev = currentNode;

      if (currentNode.next === null) {
        tail = newNode;
      } else {
        currentNode.next.prev = newNode;
      }

      currentNode.next = newNode;
      return true;
    },
    deleteNode: (data) => {
      let nodeToBeDeleted = head;

      while (nodeToBeDeleted !== null && nodeToBeDeleted.data !== data) {
        nodeToBeDeleted = nodeToBeDeleted.next;
      }

      if (nodeToBeDeleted === null) return false;

      if (nodeToBeDeleted === head) return this.deleteFirst();

      if (nodeToBeDeleted === tail) return this.deleteLast();

      nodeToBeDeleted.prev.next = nodeToBeDeleted.next;
      nodeToBeDeleted.next.prev = nodeToBeDeleted.prev;
      return true;
    },
    displayForward: () => {
      const elements = [];
      let currentNode = head;

      while (currentNode !== null) {
        elements.push(currentNode.data);
        currentNode = currentNode.next;
      }

      return elements;
    },
    displayBackward: () => {
      const elements = [];
      let currentNode = tail;

      while (currentNode !== null) {
        elements.push(currentNode.data);
        currentNode = currentNode.prev;
      }

      return elements;
    },
  };
};
