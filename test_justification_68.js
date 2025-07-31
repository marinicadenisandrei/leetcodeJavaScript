/* Leetcode - 68. Text Justification (JavaScript language) - Hard */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 68. Text Justification (JavaScript language) -"), chalk.red("Hard"))

function fullJustify(wordsVar, maxWidthVar) {
    let result = [];
    let string = "";

    for (let i = 0; i < wordsVar.length; i++) {
        if ((string + wordsVar[i]).length + 1 <= maxWidthVar + 1) {
            string += wordsVar[i];
            string += " ";
        }
        else
        {
            i--;
            string = string.slice(0, -1);
            result.push(string);
            string = "";
        }
    }

    result.push(string);

    for (let i = 0; i < result.length; i++) {
        let temp = result[i].split(" ");
        let offset = temp[0].length;
        let remover = result[i].replace(temp.shift(), "");
        let indexList = [];
        
        for (let j = 0; j < temp.length; j++) {
            let indexFind = remover.indexOf(temp[j]);
            indexList.push(indexFind + offset - 1);
        }

        let counter = 0;

        while (result[i].length < maxWidthVar) {
            if (indexList.length > 0) {
                result[i] = result[i].slice(0, indexList[0] + 1) + " " + result[i].slice(indexList[0] + 1);

                for (let j = 1; j < indexList.length; j++) {
                    if (result[i].length > maxWidthVar) {
                        break;
                    }

                    result[i] = result[i].slice(0, indexList[j] + 1 + counter) + " " + result[i].slice(indexList[j] + 1 + counter);
                    counter++;
                }
            }
            else
            {
                result[i] += " ";
            }
        }
    }

    for (let i = 0; i < result.length; i++) {
        console.log('"',result[i],'"');
    }
}

let words = [
    ["This", "is", "an", "example", "of", "text", "justification."],
    ["What","must","be","acknowledgment","shall","be"],
    ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"]
];

let maxWidth = [16,16,20];
for (let test = 0; test < maxWidth.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`));
    fullJustify(words[test], maxWidth[test]);
    console.log(" | ",chalk.green("Passed\n"));
}
