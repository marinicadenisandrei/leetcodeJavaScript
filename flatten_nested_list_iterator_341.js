/* Leetcode - 341. Flatten Nested List Iterator (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 341. Flatten Nested List Iterator (JavaScript language) - Medium"));

function nestedIterator(nestedListVar) {
    let result = [];

    for (let i = 0; i < nestedListVar.length; i++) {
        if (Array.isArray(nestedListVar[i])) {
            result = result.concat(nestedIterator(nestedListVar[i]));
        } else {
            result.push(nestedListVar[i]);
        }
    }

    return result;
}

nestedList = [[[1,1],2,[1,1]],[1,[4,[6]]]];

for (let test = 0; test < nestedList.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        nestedIterator(nestedList[test]),
        "|",
        chalk.green("Passed")
    );
}
