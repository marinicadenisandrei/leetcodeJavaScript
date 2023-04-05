// Leetcode - 66. Plus One 
console.log("\n66. Plus One\n")

let digits = [[1,2,3], [4,3,2,1], [9]];

for (let i = 0; i < digits.length; i++) {

    digits[i] = digits[i].toString().replaceAll(",","");
    digits[i] = (parseInt(digits[i]) + 1).toString().split("");
    digits[i] = digits[i].map(Number);
    console.log(`Test ${i+1}: [${digits[i]}] | Passed`);
}

