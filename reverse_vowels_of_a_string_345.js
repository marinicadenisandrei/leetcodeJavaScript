/* Leetcode - 345. Reverse Vowels of a String (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 345. Reverse Vowels of a String (JavaScript language) -"), chalk.green("Easy"));

function reverseVowels(s) {
    const arr = [...s];
    const isVowel = ch => 'aeiouAEIOU'.includes(ch);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (!isVowel(arr[left])) {
            left++;
        } else if (!isVowel(arr[right])) {
            right--;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join('');
}

let s = ["IceCreAm","leetcode"];

for (let test = 0; test < s.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        reverseVowels(s[test]),
        "|",
        chalk.green("Passed")
    );
}