/* Leetcode - 88. Merge Sorted Array (JavaScript language) */

console.log("Leetcode - 88. Merge Sorted Array (JavaScript language)");

let nums1 = [[1,2,3,0,0,0], [1], [0]]
let nums2 = [[2,5,6], [], [1]]

let m = [3,1,0];
let n = [3,0,1];

for (let i = 0; i < nums1.length; i++) {
    nums1[i] = nums1[i].slice(0,m[i]);
    nums2[i] = nums2[i].slice(0,n[i]);

    nums1[i] = nums1[i].concat(nums2[i]);
    nums1[i].sort();

    console.log(`Test ${i+1}: [${nums1[i]}] | Passed`); 
}


