//Binary search tree
//Each node is not allowed to have more than 2 children in a Binary Search Tree; By limiting the number of children to two, 
//- we can write more efficient programs for inserting data, searching for data and deleting data in a tree;
//The child node of a parent node is referred to as left node and right node

//A binary search tree is a binary tree in which data with lesser values are stored in left nodes and data with greater values are stored in the right node;

//There are three traversal functions used with BSTs: inOrder, preOrder, postOrder

// There are three types of search typically performed with BST searches; 1) Searching for a specific value 2) Searching for a minimum value 3) Searching for a maximum value 


//Node class definition
function Node(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show(){
    return this.data;
}




//Binary Search Tree implementation
function BinarySearchTree(){
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
}

function insert(data){
    let n = new Node(data, null, null);

    if(this.root == null){
        this.root = n;
    }else{
        let current = this.root;
        let parent;

        while(true){
            parent = current;
            if(data < current.data){
                current = current.left
                if(current == null){
                    parent.left = n;
                    break;
                }
            }else{
                current = current.right;
                if(current == null){
                    parent.right = n;
                    break;
                }
            }
        }
    }

}

function getMin(){
    let current = this.root;
    while(!(current.left ==null)){
        current = current.left;
    }
    return current.data;
}

function getMax(){
    let current = this.root;
    while(!(current.right ==null)){
        current = current.right;
    }
    return current.data;
}

function find(data){
    let current = this.root;
    while(current.data != data){
        if(data < current.data){
            current = current.left;
        }else{
            current = current.right;
        }

        if(current == null) return null;
    }
    return current;
}

function inOrder(node){
    if(!(node == null)){
        inOrder(node.left)
        console.log(node.show())
        inOrder(node.right)
    }
}

function preOrder(node){
    if(!(node == null)){
        console.log(node.show())
        preOrder(node.left)
        preOrder(node.right)
       
    }
}

function postOrder(node){
    if(!(node == null)){
        postOrder(node.left)
        postOrder(node.right)
        console.log(node.show())
    }
}

function remove(data){
    root = removeNode(this.root, data)
}

function removeNode(node , data){
    if(node == null) return null;

    if(data == node.data){

        //node has no children
        if(node.left == null && node.right == null){
            return null;
        }

        // node has no left child
        if (node.left == null) {
            return node.right;
        }
        // node has no right child
        if (node.right == null) { 
            return node.left;
        }

        // node has two children
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data); 
        return node;
    }else if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
    }else{  
        node.right = removeNode(node.right, data);
        return node;
    }
}





var nums = new BinarySearchTree(); 
nums.insert(23); 
nums.insert(45); 
nums.insert(16); 
nums.insert(37); 
nums.insert(3); 
nums.insert(99); 
nums.insert(22); 
console.log(JSON.stringify(nums.root));
console.log("Inorder traversal: "); 
inOrder(nums.root);

console.log("preorder traversal: "); 
preOrder(nums.root);

console.log("postOrder traversal: "); 
postOrder(nums.root);
var min = nums.getMin();
console.log("The minimum value of the BST is: " + min);
var max = nums.getMax();
console.log("The maximum value of the BST is: " + max);


const value = 45;
var found = nums.find(value); 
if (found != null) {
    console.log("Found " + value + " in the BST.");
}else {
    console.log(value + " was not found in the BST.");
}

