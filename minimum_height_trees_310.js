/* Leetcode - 310. Minimum Height Trees (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 310. Minimum Height Trees (JavaScript language) - Medium"));

function findMinHeightTrees(nVar, edgesVar) {
    let acumulation = [];
    let individuals = [];
    let result = [];

    for (let i = 0; i < edgesVar.length; i++) {
        edgesVar[i].sort();
        acumulation.push(edgesVar[i][0]);
        acumulation.push(edgesVar[i][1]);
    }

    for (let i = 0; i < acumulation.length; i++) {
        if (!individuals.includes(acumulation[i])) {
            individuals.push(acumulation[i]);
        }
    }

    for (let i = 0; i < individuals.length; i++) {
        let flag = true;

        for (let j = 0; j < edgesVar.length; j++) {
            if (!edgesVar[j].includes(individuals[i])) {
                flag = false;
                break;
            }
        }

        if (flag) {
            return [individuals[i]];
        }
    }

    while (acumulation.length > 0) {
        let temp = [acumulation[0]]
        let starter = acumulation[0];
        acumulation.splice(0,1);
        
        for (let i = 0; i < acumulation.length; i++) {
            if (starter < acumulation[i]) {
                starter = acumulation[i];
                temp.push(starter);
                acumulation.splice(i,1);
            }
        }
        
        if (temp.length % 2 == 0 && temp.length > 3) {
            let res = [temp[(temp.length / 2) - 1], temp[(temp.length / 2)]];
            result.push(res);
        }
        else {
            let res = [temp[parseInt((temp.length / 2))]];
            result.push(res);
        }
    }

    return result[0];
}

n = [4,6];
edges = [[[1,0],[1,2],[1,3]], [[3,0],[3,1],[3,2],[3,4],[5,4]]];

for (let test = 0; test < edges.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        findMinHeightTrees(n[test], edges[test]),
        "|",
        chalk.green("Passed")
    );
}
