/* Leetcode - 354. Russian Doll Envelopes (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 354. Russian Doll Envelopes (JavaScript language) -"), chalk.red("Hard"));

function maxEnvelopes(envelopesVar) {
    envelopesVar.forEach(pair => pair.sort((a, b) => a - b));
    envelopesVar.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let result = 0;

    for (let i = 0; i < envelopesVar.length - 1; i++) {
        let tempSum = 1;

        let current = i;
        let next = i + 1;

        while (next < envelopesVar.length) {
            if (envelopesVar[next][0] - envelopesVar[current][1] === 1) {
                tempSum++;
                current = next;
                next++;
            }

            next++;
        }

        result = ((result < tempSum) ? tempSum : result);
    }

    return result;
}

let envelopes = [[[5,4],[6,4],[6,7],[2,3]],[[1,1],[1,1],[1,1]]];

for (let test = 0; test < envelopes.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        maxEnvelopes(envelopes[test]),
        "|",
        chalk.green("Passed")
    );
}
