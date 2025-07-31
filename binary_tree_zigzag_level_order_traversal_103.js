/* Leetcode - 103. Binary Tree Zigzag Level Order Traversal (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 103. Binary Tree Zigzag Level Order Traversal (JavaScript language) - Medium"));

function zigzagLevelOrder(rootVar) {
    if (rootVar.length == 0) {
        return [];
    }

    let acumulation = [[rootVar[0]]];
    rootVar.shift();
    let portion = 2;
    let reverse = true;

    while(rootVar.length > 0)
    {
        let temp = rootVar.slice(0,portion);
        if (reverse) {
            temp = temp.reverse(temp);   
            reverse = false;
        }
        else
        {
            reverse = true;
        }
        
        temp = temp.filter(item => item !== null);
        acumulation.push(temp);
        rootVar = rootVar.slice(portion); 
        temp = [];
        portion *= 2;
    }

    return acumulation
}

let root = [[3,9,20,null,null,15,7],[1],[]];

for (let test = 0; test < root.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), zigzagLevelOrder(root[test]), "|", chalk.green("Passed"));
}

