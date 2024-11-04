import { Stack } from "./src/stack.js";
import { createBinaryTree } from "./src/binaryTree.js";
import { doubleLinkedList } from "./src/doubleLinked.js";

// Stack
const stack = new Stack([], 5);

stack.push(5);
stack.push(10);
stack.push(2);

window.push = function () {
  const input = document.getElementById("elementInput");
  const element = input.value;

  try {
    stack.push(element);
    updateStackInfo();
    input.value = "";
  } catch (error) {
    alert(error.message);
  }
};

window.clear = function () {
  stack.clear();
  updateStackInfo();
};

const updateStackInfo = () => {
  document.getElementById("stackItems").textContent = stack.items;
  document.getElementById("stackSize").textContent = stack.get_size();
  document.getElementById("isEmpty").textContent = stack.is_empty();
  document.getElementById("isFull").textContent = stack.is_full();
};

updateStackInfo();

// Double Linked List
let list = doubleLinkedList();

window.updateDisplay = function () {
  const display = document.getElementById("listContent");
  const elements = list.displayForward();
  display.textContent = elements.length
    ? elements.join(" <>")
    : "List is empty";
};

window.addFirst = function () {
  const input = document.getElementById("doubleLinkedInput");
  const value = parseInt(input.value);
  try {
    if (!isNaN(value)) {
      list.insertFirst(value);
      updateDisplay();
      input.value = "";
    }
  } catch {
    throw window.alert("The entered value is not a number!");
  }
};

window.deleteFirst = function () {
  try {
    list.deleteFirst();
    updateDisplay();
  } catch {
    throw window.alert("Deletion failed!");
  }
};

window.addLast = function () {
  const input = document.getElementById("doubleLinkedInput");
  const value = parseInt(input.value);
  try {
    if (!isNaN(value)) {
      list.insertLast(value);
      updateDisplay();
      input.value = "";
    }
  } catch {
    throw window.alert("The entered value is not a number!");
  }
};

window.deleteLast = function () {
  try {
    list.deleteLast();
    updateDisplay();
  } catch {
    throw window.alert("Deletion failed!");
  }
};

window.insertAfter = function () {
  const inputNodeData = document.getElementById("nodeAfter");
  const inputNewData = document.getElementById("newData");
  const nodeData = parseInt(inputNodeData.value);
  const newData = parseInt(inputNewData.value);
  try {
    list.insertAfter(nodeData, newData);
    updateDisplay();
    inputNewData.value = "";
    inputNodeData.value = "";
  } catch {
    throw window.alert("Insertion failed!");
  }
};

window.deleteNode = function () {
  const inputDeleteNode = document.getElementById("deleteNode");
  const deleteNodeData = parseInt(inputDeleteNode.value);
  try {
    list.deleteNode(deleteNodeData);
    updateDisplay();
    inputDeleteNode.value = "";
  } catch {
    throw window.alert("Deletion failed!");
  }
};

window.displayForward = function () {
  const display = document.getElementById("listDisplay");
  try {
    const elements = list.displayForward();
    display.textContent = elements.length
      ? elements.join(" <>")
      : "List is empty";
  } catch {
    throw window.alert("Display failed!");
  }
};

window.displayBackward = function () {
  const display = document.getElementById("listDisplay");
  try {
    const elements = list.displayBackward();
    display.textContent = elements.length
      ? elements.join(" <>")
      : "List is empty";
  } catch {
    throw window.alert("Display failed!");
  }
};

// Binary Search Tree
const binaryTree = createBinaryTree();

binaryTree.insert(8);
binaryTree.insert(3);
binaryTree.insert(4);
binaryTree.insert(10);
binaryTree.insert(12);

window.displayOutput = (message) => {
  document.getElementById("output").textContent = message;
};

window.insertNode = function () {
  const value = parseInt(document.getElementById("nodeValue").value);

  if (isNaN(value)) {
    window.alert("Please enter a numerical value!");
    return;
  }
  binaryTree.insert(value);

  window.alert(`Node ${value} has been deleted`);
  document.getElementById("nodeValue").textContent = "";
};

window.searchNode = function () {
  const value = parseInt(document.getElementById("nodeValue").value);

  if (isNaN(value)) {
    window.alert("Please enter a numerical Value");
    return;
  }

  const node = binaryTree.search(value);
  window.displayOutput(
    node ? `Node ${value} has been found` : `Node ${value} does not exist`
  );
  document.getElementById("nodeValue").textContent = "";
};

window.deleteBinaryNode = function () {
  const value = parseInt(document.getElementById("nodeValue").value);
  if (isNaN(value)) {
    window.alert("Please enter a numerical value");
    return;
  }
  binaryTree.delete(value);
  displayOutput(`Node ${value} has been deleted`);
};

window.traverseBFS = () => {
  const result = binaryTree.traverseBFS((node) => node.value);
  displayOutput("Traverse BFS: " + result.join(" - "));
};

window.traverseDFS = (type) => {
  const result = binaryTree.traverseDFS((node) => node.value, type);
  displayOutput("Traversare DFS: " + result.join(" - "));
};
