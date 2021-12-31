////////////////////////////////////////////////
//  Code Wars: DESCENDING ORDER
////////////////////////////////////////////////

function descendingOrder(n){
    let num = n.toString();
    let numList = [];
    console.log ("Num:", num);
    for (x in num) {
        numList.push(parseInt(num[x]));
    }
    numList.sort((a, b) => b - a);
    console.log("numList:", numList);
    n=0;
    for (let x=0; x< numList.length; x++) {
        n += numList[x] * Math.pow(10,numList.length-x-1);
        console.log ("n:", n)
    }
}

descendingOrder(12345);