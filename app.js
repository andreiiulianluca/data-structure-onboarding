// Stack
const stack = new Stack([], 5);

stack.pushElement(5);
stack.pushElement(10);
stack.pushElement(2);

const pushButtonClickHandler = () => {
  const input = document.getElementById("elementInput");
  const element = input.value;

  try {
    stack.pushElement(element);
    displayStackInfo();
    input.value = "";
  } catch (error) {
    alert(error.message);
  }
};

const clearStackClickHandler = () => {
  stack.clearStack();
  displayStackInfo();
};

const displayStackInfo = () => {
  document.getElementById("stackItems").textContent = stack.getItems();
  document.getElementById("stackSize").textContent = stack.getSize();
  document.getElementById("isEmpty").textContent = stack.checkIsEmpty();
  document.getElementById("isFull").textContent = stack.checkIsFull();
};

displayStackInfo();

document
  .getElementById("pushButton")
  .addEventListener("click", pushButtonClickHandler);
document
  .getElementById("clearButton")
  .addEventListener("click", clearStackClickHandler);

// Double Linked List
let list = new DoubleLinkedList();

const displayListInfo = () => {
  const display = document.getElementById("listContent");
  const elements = list.displayForward();
  display.textContent = elements.length
    ? elements.join(" <>")
    : "List is empty";
};

const insertFirstClickHandler = () => {
  const input = document.getElementById("doubleLinkedInput");
  const value = parseInt(input.value);
  try {
    if (!isNaN(value)) {
      list.insertFirst(value);
      displayListInfo();
      input.value = "";
    }
  } catch {
    throw alert("We could not insert your value!");
  }
};

const deleteFirstClickHandler = () => {
  try {
    list.deleteFirst();
    displayListInfo();
  } catch {
    throw alert("Deletion failed!");
  }
};

const insertLastClickHandler = () => {
  const input = document.getElementById("doubleLinkedInput");
  const value = parseInt(input.value);
  try {
    if (!isNaN(value)) {
      list.insertLast(value);
      displayListInfo();
      input.value = "";
    }
  } catch {
    throw alert("We could not insert your value!");
  }
};

const deleteLastClickHandler = () => {
  try {
    list.deleteLast();
    displayListInfo();
  } catch {
    throw alert("Deletion failed!");
  }
};

const insertAfterClickHandler = () => {
  const inputNodeData = document.getElementById("nodeAfter");
  const inputNewData = document.getElementById("newData");
  const nodeData = parseInt(inputNodeData.value);
  const newData = parseInt(inputNewData.value);
  try {
    list.insertAfter(nodeData, newData);
    displayListInfo();
    inputNewData.value = "";
    inputNodeData.value = "";
  } catch {
    throw alert("We could not insert your value!");
  }
};

const deleteNodeClickHandler = () => {
  const inputDeleteNode = document.getElementById("deleteNode");
  const deleteNodeData = parseInt(inputDeleteNode.value);
  try {
    list.deleteNode(deleteNodeData);
    displayListInfo();
    inputDeleteNode.value = "";
  } catch {
    throw alert("Deletion failed!");
  }
};

const displayForwardClickHandler = () => {
  const display = document.getElementById("listDisplay");
  try {
    const elements = list.displayForward();
    display.textContent = elements.length
      ? elements.join(" <>")
      : "List is empty";
  } catch {
    throw alert("Display failed!");
  }
};

const displayBackwardClickHandler = () => {
  const display = document.getElementById("listDisplay");
  try {
    const elements = list.displayBackward();
    display.textContent = elements.length
      ? elements.join(" <>")
      : "List is empty";
  } catch {
    throw alert("Display failed!");
  }
};

document
  .getElementById("insertFirstButton")
  .addEventListener("click", insertFirstClickHandler);
document
  .getElementById("insertLastButton")
  .addEventListener("click", insertLastClickHandler);
document
  .getElementById("deleteFirstButton")
  .addEventListener("click", deleteFirstClickHandler);
document
  .getElementById("deleteLastButton")
  .addEventListener("click", deleteLastClickHandler);
document
  .getElementById("insertAfterButton")
  .addEventListener("click", insertAfterClickHandler);
document
  .getElementById("deleteNodeButton")
  .addEventListener("click", deleteNodeClickHandler);
document
  .getElementById("displayForwardButton")
  .addEventListener("click", displayForwardClickHandler);
document
  .getElementById("displayBackwardButton")
  .addEventListener("click", displayBackwardClickHandler);

// Binary Search Tree
const binaryTree = new BinaryTree();

const displayTreeInfo = (message) => {
  document.getElementById("output").textContent = message;
};

const insertNodeClickHandler = () => {
  const value = parseInt(document.getElementById("nodeValue").value);

  if (isNaN(value)) {
    alert("Please enter a numerical value!");
    return;
  }
  binaryTree.insertNode(value);

  displayTreeInfo(`Node ${value} has been added`);
  document.getElementById("nodeValue").textContent = "";
};

const searchNodeClickHandler = () => {
  const value = parseInt(document.getElementById("nodeValue").value);

  if (isNaN(value)) {
    alert("Please enter a numerical Value");
    return;
  }

  const node = binaryTree.searchNode(value);
  displayTreeInfo(
    node ? `Node ${value} has been found` : `Node ${value} does not exist`
  );
  document.getElementById("nodeValue").textContent = "";
};

const deleteBinaryNodeClickHandler = () => {
  const value = parseInt(document.getElementById("nodeValue").value);
  if (isNaN(value)) {
    alert("Please enter a numerical value");
    return;
  }
  binaryTree.deleteNode(value);
  displayTreeInfo(`Node ${value} has been deleted`);
};

const traverseBFSClickHandler = () => {
  const result = binaryTree.traverseBFS((node) => node.value);
  displayTreeInfo("Traverse BFS: " + result.join(" - "));
};

const traverseDFSClickHandler = () => {
  const type = document.getElementById("traverseDFSButton").value;
  const result = binaryTree.traverseDFS((node) => node.value, type);
  displayTreeInfo("Traversare DFS: " + result.join(" - "));
};

document
  .getElementById("insertNodeButton")
  .addEventListener("click", insertNodeClickHandler);
document
  .getElementById("searchNodeButton")
  .addEventListener("click", searchNodeClickHandler);
document
  .getElementById("deleteBinaryNodeButton")
  .addEventListener("click", deleteBinaryNodeClickHandler);
document
  .getElementById("traverseBFSButton")
  .addEventListener("click", traverseBFSClickHandler);
document
  .getElementById("traverseDFSButton")
  .addEventListener("click", traverseDFSClickHandler);
