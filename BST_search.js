class Node{
    constructor(key){
        this.data = key;
        this.left = null;
        this.right = null;
    }
  
}

var root = null;

function insert(data){
   root  = insertRec(root , data);
}

function insertRec(root , data){
  if(root == null){
    root = new Node(data);
    return root;
  }

  if(data < root.data){
    root.left = insertRec(root.left , data);

  }else if(data>root.data){
    root.right = insertRec(root.right , data);
}

return root;
}


function searchNode(root,key){
    if(root == null || root.data == key){
        return root;
    }
    if(key <root.data){
        return searchNode(root.left , key);
    }else{
        return searchNode(root.right , key);
    }
}

function Inordertraversal(root){
    if(root == null){
        return;
    }
    Inordertraversal(root.left);
    console.log(root.data);
    Inordertraversal(root.right);
}

insert(50);
insert(40);
insert(45);
insert(60);
insert(47);
// Inordertraversal(root);

const result = searchNode(root , 77);
if(result == null){
    console.log("not found");
}else{
    console.log("found");
}