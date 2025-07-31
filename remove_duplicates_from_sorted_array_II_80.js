/* Leetcode - 80. Remove Duplicates from Sorted Array II (JavaScript) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 80. Remove Duplicates from Sorted Array II (JavaScript) - Medium"));

function occurenceElement(index, array) {
    let occ = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[index]) {
            occ++;
        }
    }

    return occ;
}

function removeDuplicates(numsVar) {
    let deletion = 0;

    for (let i = 0; i < numsVar.length; i++) {
        if (occurenceElement(i, numsVar) > 2) {
            numsVar.splice(i, 1);
            deletion++;
        }
    }

    for (let i = 0; i < deletion; i++) {numsVar.push("_");}

    return numsVar;
}

let nums = [[1,1,1,2,2,3],[0,0,1,1,1,1,2,3,3]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), removeDuplicates(nums[test]), "|", chalk.green("Passed"));    
}
