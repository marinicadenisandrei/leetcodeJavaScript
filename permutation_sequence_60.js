/* Leetcode - 60. Permutation Sequence (JavaScript language) - Hard */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 60. Permutation Sequence (JavaScript language) -"), chalk.red("Hard"));

function numberPermute(nVar) {
    let number = 1;

    for (let i = 2; i <= nVar; i++) number *= i;
    
    return number;
}

function swapCharacters(inputString, index1Var, index2Var) {
    const characters = inputString.split('');

    const temp = characters[index1Var];
    characters[index1Var] = characters[index2Var];
    characters[index2Var] = temp;

    const swappedString = characters.join('');

    return swappedString;
}

function getPermutation(nVar, kVar) {
    let starting = "";
    let permutations = [];
    let depth = numberPermute(nVar);

    for (let i = 1; i <= nVar; i++) starting += i.toString();
    
    let index1 = 0;
    let index2 = 1;

    for (let i = 0; i < depth; i++) {
        if (index2 < nVar) {
            starting = swapCharacters(starting, index1, index2);
            permutations.push(parseInt(starting, 10));
        }
        else
        {
            starting = swapCharacters(starting, 0, starting.length - 1);
            permutations.push(parseInt(starting, 10));

            index1 = -1;
            index2 = 0;
        }

        index1++;
        index2++;
    }

    permutations.sort();

    return permutations[kVar - 1];
}

let n = [3,4,3];
let k = [3,9,1];

for (let test = 0; test < n.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), getPermutation(n[test],k[test]), "|", chalk.green("Passed"));
}
