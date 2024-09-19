function PN(n){
    if(n>0){
        PN(n-1);
        console.log(n);
    }
}
PN(100);

//SC - O(n).
//TC - O(n).