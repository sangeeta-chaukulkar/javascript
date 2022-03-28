class TreeNode
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor()
    {
        this.root = null;
    }
    insert(data)
    {
    var node = new TreeNode(data);
                     
    if(this.root == null){
        this.root = node;
        return this.root;} 
    else
        return this.insertNode(this.root, node);
    }
    insertNode(root, newNode)
    {
        if(newNode.data < root.data)
        {
            if(root.left == null)
                root.left = newNode;
            else
                this.insertNode(root.left, newNode);
        }
        else
        {
            if(root.right == null)
                root.right = newNode;
            else
                this.insertNode(root.right,newNode);
        }
        return root;
    }
    search(node, data)
    {
    if(node == null)
        return "Value not present in tree";
    else if(node.data == data)
        return "Value present in tree";
    else if(data <= node.data)
        return this.search(node.left, data);
    else 
        return this.search(node.right, data);
    }
    preorderRecursive(root)
    {
    if(root !== null)
        {
        console.log(root.data);
        this.preorderRecursive(root.left);
        this.preorderRecursive(root.right);
        }
    }
    preorderIterative(root)
    {
    if (root == null)
        return;
    var rootStack = [];
    rootStack.push(root);
    while (rootStack.length > 0)
        {
            var currentnode = rootStack[rootStack.length - 1];
            console.log(currentnode.data);
            rootStack.pop();
            if (currentnode.right != null)
            {
                rootStack.push(currentnode.right);
            }
            if (currentnode.left != null)
            {
                rootStack.push(currentnode.left);
            }
        }
    }
}

var bstobj = new BinarySearchTree();
root=bstobj.insert(5);
root =bstobj.insert(3);
root=bstobj.insert(43);
root=bstobj.insert(26);
root=bstobj.insert(1);
console.log(root);
console.log(bstobj.search(root,1));
console.log("preorder traversal using recursive");
bstobj.preorderRecursive(root);
console.log("preorder traversal using iterative")
bstobj.preorderIterative(root);


