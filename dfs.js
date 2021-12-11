class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//iterative
const depthFirstValues = (root) => {
    // todo
    let ans = []
    let stack = [root]

    while (stack.length) {
        let currentNode = stack.pop()
        ans.push(currentNode.val)
        if (currentNode.right) stack.push(currentNode.right)
        if (currentNode.left) stack.push(currentNode.left)
    }
    return ans
};

//recursive
// const depthFirstValues = (root) => {
//     if (root === null)
//       return [];

//     const leftValues = depthFirstValues(root.left);
//     const rightValues = depthFirstValues(root.right);
//     return [ root.val, ...leftValues, ...rightValues ];
//   };

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(depthFirstValues(a))
//    -> ['a', 'b', 'd', 'e', 'c', 'f']