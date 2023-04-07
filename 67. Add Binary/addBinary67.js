/* Leetcode - 67. Add Binary */

console.log("Leetcode - 67. Add Binary");

let a = ["11","1010"];
let b = ["1","1011"];

function binaryToDecimal(binaryNumber) {
    binaryNumber = binaryNumber.split("").reverse().join("");
    let decimalOutput = null;
    for (let i = 0; i < binaryNumber.length ; i++) {
        decimalOutput += Number(binaryNumber[i] == 1) ? 2**i : 0;
    }

    return decimalOutput;
}

function decimalToBinary(decimalNumber){
    let output = [];
    
    while (decimalNumber >= 1) {
        if (decimalNumber % 2 == 0) {
            output.push(0);
        }
        else
        {
            output.push(1);
        }
        decimalNumber = parseInt(decimalNumber/2);
    }

    output = output.toString().split(",").reverse().join("");

    return output.toString()
}

for (let test = 0; test < a.length; test++) {
    a[test] = binaryToDecimal(a[test]) + binaryToDecimal(b[test]);
    console.log(`Test ${test+1}: ${decimalToBinary(a[test])} | Passed`);
}


