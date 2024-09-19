 class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
 }

function push(data){
    let Newnode = new Node(data);

    Newnode.next = head;
    head = Newnode;
}

let head = null;

for(i=1;i<=10;i++){
    push(i);
}

function reverseLL(head){
    let currentnode = head;
    let preNode = null;
    let nextnode = null;

    while(currentnode != null){
        nextnode = currentnode.next;
        currentnode.next = preNode;
        preNode = currentnode;
        currentnode = nextnode;
    }
    return preNode;

}

const list = reverseLL(head);

function printlist(){
    let current = list;

    while(current != null){
        console.log(current.data);
        current = current.next;
    }
}
printlist();

//TC -- O(n)
//SC -- O(1)