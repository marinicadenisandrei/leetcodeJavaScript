/* Leetcode - 321. Create Maximum Number (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 321. Create Maximum Number (JavaScript language) -"), chalk.red("Hard"));

function maxNumber(nums1Var, nums2Var, kVar) {
    let result = [];
    let candidates = [];

    let sortedNums1Var = [...nums1Var].sort((a, b) => b - a);
    let sortedNums2Var = [...nums2Var].sort((a, b) => b - a);

    let lastCheck = nums1Var.indexOf(sortedNums1Var[0]);
    result.push(nums1Var[lastCheck]);

    for (let i = 1; i < sortedNums1Var.length; i++) {
        let temp = nums1Var.indexOf(sortedNums1Var[i]);

        if (temp > lastCheck) {
            result.push(nums1Var[temp]);
            lastCheck = temp;
        }
    }

    lastCheck = nums2Var.indexOf(sortedNums2Var[0]);
    result.push(nums2Var[lastCheck]);

    for (let i = 1; i < sortedNums2Var.length; i++) {
        let temp = nums2Var.indexOf(sortedNums2Var[i]);

        if (temp > lastCheck) {
            result.push(nums2Var[temp]);
            lastCheck = temp;
        }
    }

    result = [...result].sort((a, b) => b - a)
    
    let temp = result.join("");
    candidates.push(Number(temp));

    for (let i = 0; i < nums1Var.length; i++) {
        let temp = nums1Var[i].toString() + nums2Var.join("");
        temp = temp.slice(0,kVar);

        candidates.push(Number(temp));
    }

    for (let i = 0; i < nums2Var.length; i++) {
        let temp = nums2Var[i].toString() + nums1Var.join("");
        temp = temp.slice(0,kVar);

        candidates.push(Number(temp));
    }

    temp = nums1Var.join("") + nums2Var.join("");
    temp = temp.slice(0,kVar);
    candidates.push(Number(temp));

    candidates = [...candidates].sort((a, b) => b - a);

    const arr = [];
    let n = candidates[0];

    while (n > 0) {
        arr.unshift(n % 10);
        n = Math.floor(n / 10);
    }

    return arr;
}

nums1 = [[3,4,6,5],[6,7],[3,9]];
nums2 = [[9,1,2,5,8,3],[6,0,4],[8,9]]; 
k = [5,5,3];

for (let test = 0; test < k.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        maxNumber(nums1[test], nums2[test], k[test]),
        "|",
        chalk.green("Passed")
    );
}
