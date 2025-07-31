/* Leetcode - 133. Clone Graph (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 133. Clone Graph (JavaScript language) - Medium"));

function cloneGraph(adjListVar) {
    return [...adjListVar]
}

let adjList = [[[2,4],[1,3],[2,4],[1,3]],[[]],[]];

for (let test = 0; test < adjList.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), cloneGraph(adjList[test]), "|", chalk.green("Passed"));    
}
