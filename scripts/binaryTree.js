const createNode = (value) => ({
  value,
  left: null,
  right: null,
});

export const createBinaryTree = () => {
  let root = null;

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

  const traverseBFS = (callback = (node) => node) => {
    if (root === null) return [];

    const queue = [root];
    const result = [];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      result.push(callback(currentNode));

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return result;
  };

  const traverseDFS = (callback = (node) => node, type) => {
    if (root === null) return [];
    let result = [];

    const preorderTraversal = (node, result = []) => {
      if (node === null) return result;
      result.push(callback(node));
      preorderTraversal(node.left, result);
      preorderTraversal(node.right, result);
      return result;
    };

    const inorderTraversal = (node, result = []) => {
      if (node === null) return result;
      inorderTraversal(node.left, result);
      result.push(callback(node));
      inorderTraversal(node.right, result);
      return result;
    };

    const postorderTraversal = (node, result = []) => {
      if (node === null) return result;
      postorderTraversal(node.left, result);
      postorderTraversal(node.right, result);
      result.push(callback(node));
      return result;
    };

    switch (type) {
      case "preorder":
        return preorderTraversal(root);
      case "inorder":
        return inorderTraversal(root);
      case "postorder":
        return postorderTraversal(root);
    }
    return result;
  };

  return {
    getRoot: () => root,
    search: (value) => searchRecursive(root, value),
    insert: (value) => {
      root = insertRecursive(root, value);
    },
    delete: (value) => {
      root = deleteRecursive(root, value);
    },
    traverseBFS,
    traverseDFS,
  };
};
