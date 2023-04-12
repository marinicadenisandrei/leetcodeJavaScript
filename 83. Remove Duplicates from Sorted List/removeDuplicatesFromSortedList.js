/* Leetcode - 83. Remove Duplicates from Sorted List */

console.log("Leetcode - 83. Remove Duplicates from Sorted List")

let head = [[1,1,2],[1,1,2,3,3]];

for (let i = 0; i < head.length; i++) {
    head[i] = [...new Set(head[i])];
    console.log(`Test ${i+1}: [${head[i]}] | Passed`);
}
