/* Leetcode - 331. Verify Preorder Serialization of a Binary Tree (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 331. Verify Preorder Serialization of a Binary Tree (JavaScript language) - Medium"));

function isValidSerialization(preorderVar) {
    let nodes = preorderVar.split(",");
    let slots = 1;

    for (let i = 0; i < nodes.length; i++) {
        slots--;

        if (slots < 0) {
            return false;
        }

        if (nodes[i] !== "#") {
            slots += 2;
        }
    }

    return slots === 0;
}

let preorder = ["9,3,4,#,#,1,#,#,2,#,6,#,#","1,#","9,#,#,1"];

for (let test = 0; test < preorder.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        isValidSerialization(preorder[test]),
        "|",
        chalk.green("Passed")
    );
}
