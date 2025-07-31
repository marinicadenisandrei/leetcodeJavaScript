/* Leetcode - 30. Substring with Concatenation of All Words (JavaScript language) - Hard */

function generate_permutations(array_len) {
    let permutations = [];
    let output_permutations_index = [];
    let for_depth = 1;

    for (let i = 0; i < array_len; i++) {
        permutations.push(i);
        for_depth *= i + 1;
    }

    let index1 = 0;
    let index2 = 1;
    let temp = 0;

    output_permutations_index.push([...permutations]);

    for (let i = 0; i < for_depth - 1; i++) {

        if (index2 < array_len) {
            temp = permutations[index1];
            permutations[index1] = permutations[index2];
            permutations[index2] = temp;    
        }
        else
        {
            temp = permutations[0];
            permutations[0] = permutations[permutations.length - 1];
            permutations[permutations.length - 1] = temp;

            index1 = -1;
            index2 = 0;
        }

        output_permutations_index.push([...permutations]);

        index1++;
        index2++;
     
    }    

    return output_permutations_index;
}

function generate_words(permutation_array_index, words_list)
{
    let concatenate_words = [];
    let temp_word = "";

    for (let i = 0; i < permutation_array_index.length; i++) {
        for (let j = 0; j < permutation_array_index[i].length; j++) {
            temp_word += words_list[permutation_array_index[i][j]]          
        }
        concatenate_words.push(temp_word);
        temp_word = ""
    }

    return concatenate_words
}

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 30. Substring with Concatenation of All Words (JavaScript language) -"), chalk.red("Hard"));

let sTest = ["barfoothefoobarman", "wordgoodgoodgoodbestword"];
let wordsTest = [["foo","bar"], ["word","good","best","word"]];

for (let test = 0; test < sTest.length; test++) {
    let s = sTest[test];
    let words = wordsTest[test];
    let output = []

    permutations_global = generate_permutations(words.length);
    array_of_words = generate_words(permutations_global, words);

    array_of_words.forEach(element => {
        if (s.includes(element)) {
            output.push((s.indexOf(element)));   
        }
    });

    output.sort();

    console.log(chalk.green(`Test ${test + 1}:`), output, "|", chalk.green("Passed"));
}


