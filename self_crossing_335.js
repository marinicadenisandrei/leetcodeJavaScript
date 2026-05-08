/* Leetcode - 335. Self Crossing (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 335. Self Crossing (JavaScript language) - Medium"));

function isSelfCrossing(distanceVar) {
    for (let i = 0; i < distanceVar.length; i++) {
        if (i >= 3 &&
            distanceVar[i] >= distanceVar[i - 2] &&
            distanceVar[i - 1] <= distanceVar[i - 3]) {
            return true;
        }

        if (i >= 4 &&
            distanceVar[i - 1] == distanceVar[i - 3] &&
            distanceVar[i] + distanceVar[i - 4] >= distanceVar[i - 2]) {
            return true;
        }

        if (i >= 5 &&
            distanceVar[i - 2] >= distanceVar[i - 4] &&
            distanceVar[i] + distanceVar[i - 4] >= distanceVar[i - 2] &&
            distanceVar[i - 1] <= distanceVar[i - 3] &&
            distanceVar[i - 1] + distanceVar[i - 5] >= distanceVar[i - 3]) {
            return true;
        }
    }

    return false;
}

let distance = [[2,1,1,2],[1,2,3,4],[1,1,1,2,1]];

for (let test = 0; test < distance.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        isSelfCrossing(distance[test]),
        "|",
        chalk.green("Passed")
    );
}
