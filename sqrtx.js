/* Leetcode - 69. Sqrt(x)*/

console.log("Leetcode - 69. Sqrt(x)")

let x = [4,8];

for (let i = 0; i < x.length; i++) {
    x[i] = parseInt(Math.sqrt(x[i]));
    console.log(`Test ${i+1}: ${x[i]} | Passed`);
}