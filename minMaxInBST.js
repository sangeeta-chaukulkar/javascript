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
        getMinVal() {
        if (this.root === null) {
           console.log( "Empty tree!");
        }
        let currNode = this.root;
     
        while (currNode.left !== null) {
           currNode = currNode.left;
        }
        return currNode.data;
     }
     getMaxVal() {
        if (this.root === null) {
            console.log( "Empty tree!");
        }
        let currNode = this.root;
        
        while (currNode.right !== null) {
           currNode = currNode.right;
        }
           return currNode.data;
        }
}

var bstobj = new BinarySearchTree();
root=bstobj.insert(5);
root =bstobj.insert(3);
root=bstobj.insert(43);
root=bstobj.insert(26);
root=bstobj.insert(1);
console.log(root);
console.log("min value ");
console.log(bstobj.getMinVal());
console.log("Max value ");
console.log(bstobj.getMaxVal());