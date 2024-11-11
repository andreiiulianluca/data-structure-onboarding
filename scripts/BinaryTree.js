function BinaryNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const findMinNode = (node) => {
  return node.left === null ? node : findMinNode(node.left);
};

const preorderTraversal = (callback, node, result = []) => {
  if (node === null) return result;
  result.push(callback(node));
  preorderTraversal(callback, node.left, result);
  preorderTraversal(callback, node.right, result);
  return result;
};

const inorderTraversal = (callback, node, result = []) => {
  if (node === null) return result;
  inorderTraversal(callback, node.left, result);
  result.push(callback(node));
  inorderTraversal(callback, node.right, result);
  return result;
};

const postorderTraversal = (callback, node, result = []) => {
  if (node === null) return result;
  postorderTraversal(callback, node.left, result);
  postorderTraversal(callback, node.right, result);
  result.push(callback(node));
  return result;
};

function BinaryTree() {
  this.root = null;
}

Object.assign(BinaryTree.prototype, {
  traverseBFS: function (callback = (node) => node) {
    if (this.root === null) return [];

    const queue = [this.root];
    const result = [];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      result.push(callback(currentNode));

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return result;
  },

  traverseDFS: function (callback = (node) => node, type) {
    if (this.root === null) return [];

    switch (type) {
      case "preorder":
        return preorderTraversal(callback, this.root, []);
      case "inorder":
        return inorderTraversal(callback, this.root, []);
      case "postorder":
        return postorderTraversal(callback, this.root, []);
      default:
        return [];
    }
  },

  searchRecursive: function (node, value) {
    if (node === null) return node;
    if (node.value === value) return true;
    return value < node.value
      ? this.searchRecursive(node.left, value)
      : this.searchRecursive(node.right, value);
  },

  deleteRecursive: function (node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.deleteRecursive(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteRecursive(node.right, value);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }

      let minNode = findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.deleteRecursive(node.right, minNode.value);
    }

    return node;
  },

  insertRecursive: function (node, value) {
    if (node === null) {
      newNode = new BinaryNode(value);
      return newNode;
    }
    if (this.searchNode(value))
      throw new Error("This value has been already added!");

    if (value < node.value) {
      node.left = this.insertRecursive(node.left, value);
    } else {
      node.right = this.insertRecursive(node.right, value);
    }

    return node;
  },

  getRoot: function () {
    return this.root;
  },

  searchNode: function (value) {
    return this.searchRecursive(this.root, value);
  },

  insertNode: function (value) {
    this.root = this.insertRecursive(this.root, value);
  },

  deleteNode: function (value) {
    this.root = this.deleteRecursive(this.root, value);
  },
});
