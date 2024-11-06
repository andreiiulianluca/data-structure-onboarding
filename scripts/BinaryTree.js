const createNode = (value) => ({
  value,
  left: null,
  right: null,
});

const insertRecursive = (node, value) => {
  if (node === null) return createNode(value);

  return value < node.value
    ? { ...node, left: insertRecursive(node.left, value) }
    : { ...node, right: insertRecursive(node.right, value) };
};

const findMinNode = (node) => {
  return node.left === null ? node : findMinNode(node.left);
};

const searchRecursive = (node, value) => {
  if (node === null || node.value === value) return node;

  return value < node.value
    ? searchRecursive(node.left, value)
    : searchRecursive(node.right, value);
};

const deleteRecursive = (node, value) => {
  if (node === null) {
    return true;
  }

  if (value < node.value) {
    return {
      ...node,
      left: deleteRecursive(node.left, value),
    };
  }

  if (value > node.value) {
    return {
      ...node,
      right: deleteRecursive(node.right, value),
    };
  }

  if (node.left === null && node.right === null) {
    return null;
  }

  if (node.left === null) return node.right;
  if (node.right === null) return node.left;

  const minNode = findMinNode(node.right);
  return {
    ...node,
    value: minNode.value,
    right: deleteRecursive(node.right, minNode.value),
  };
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

  getRoot: function () {
    return this.root;
  },

  searchNode: function (value) {
    return searchRecursive(this.root, value);
  },

  insertNode: function (value) {
    this.root = insertRecursive(this.root, value);
  },

  deleteNode: function (value) {
    this.root = deleteRecursive(this.root, value);
  },
});
