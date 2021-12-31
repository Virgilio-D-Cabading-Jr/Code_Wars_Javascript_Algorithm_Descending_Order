////////////////////////////////////////////////
//  Code Wars: DESCENDING ORDER
////////////////////////////////////////////////

function descendingOrder(n){
    let num = n.toString();
    let numList = [];
    for (x in num) {
        numList.push(parseInt(num[x]));
    }
    numList.sort((a, b) => b - a);
    n=0;
    for (let x=0; x< numList.length; x++) {
        n += numList[x] * Math.pow(10,numList.length-x-1);
    }
    return n;
}

console.log("Test num: 12345 ||", descendingOrder(12345));
console.log("Test num: 0 ||", descendingOrder(0));
console.log("Test num: 42145 ||", descendingOrder(42145));
console.log("Test num: 145263 ||", descendingOrder(145263));
console.log("Test num: 123456789 ||", descendingOrder(123456789));
// console.log("Test num:  ||", descendingOrder(""));