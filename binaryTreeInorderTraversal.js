/* Leetcode - 94. Binary Tree Inorder Traversal (JavaScript langiage)*/

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 94. Binary Tree Inorder Traversal"));

state = chalk.green(`Passed`);

let testRoots = [[1,0,2,3],[],[1]];

for (let test = 0; test < testRoots.length; test++) {
    root = testRoots[test];
    let output = [];

    let power = 0;
    let depth = 0;
    let start = 0;
    let nullElements = 0;

    function binaryDepth(sizeArray)
    {
        let powerIncrement = 0;
        while(sizeArray >= 0)
        {
            sizeArray -= 2**powerIncrement;
            powerIncrement++;
        }

        return powerIncrement;
    }

    for (let i = 0; i < binaryDepth(root.length); i++) {
        depth += 2**power;

        if (nullElements > 0) {
            depth -= nullElements*2;
        }

        output = [...output, ...[root.slice(start,depth)]];

        for (let k = 0; k < nullElements*2; k++) {
            output.slice(-1)[0].push(0);
        }

        output.slice(-1)[0].sort();

        nullElements = 0;
        
        for (let j = 0; j < output.slice(-1)[0].length; j++) {
            if (output.slice(-1)[0][j] == 0) {
                nullElements ++;
            }
        }

        start = depth;
        power++;    
    }

    final = [root[0]]

    for (let i = output.length-1; i > 0 ; i--) {

        final = [...final, output[i].filter(val => val != "0")];
    }

    text = chalk.green(`Test ${test+1}: `);
    console.log(`${text} [${final.flat(1)}] | ${state}`);
}







