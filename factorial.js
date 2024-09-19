function factorial(n){
    if(n==1){
        return 1
    }
    return n*factorial(n-1);
}
const res = factorial(12);
console.log(res);

//TC - O(n).
//SC - O(n).

