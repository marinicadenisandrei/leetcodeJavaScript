/* Leetcode - 72. Edit Distance (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 72. Edit Distance (JavaScript language) - Medium"));

function minDistance(word1Var, word2Var) {
  let loop = 0;
  let occ = 0;
 
  if (word1Var.length > word2Var.length) {
    loop = word2Var.length;
  }
  else {
    loop = word1Var.length;
  }
 
  let deleteVar = 0;
 
  for (let i = 0; i < loop; i++) {
    if (word1Var[i] != word2Var[i]) {
     
    }
  }
 
  for (let i = loop; i > 0; i--) {
    if (word1Var[i] == word2Var[i]) {
      deleteVar++;
    }
    else
    {
      break;
    }
  }
 
  if (deleteVar > 0) {
    word1Var = word1Var.slice(0, -1 * deleteVar + 1);
    word2Var = word2Var.slice(0, -1 * deleteVar + 1);
  }
 
  let actualIndex = [];
  let potentials = [];
 
  for (let i = 0; i < word2Var.length; i++) {
    actualIndex.push(word1Var.indexOf(word2Var[i]));
  }
 
  actualIndex = [... new Set(actualIndex)];
 
  for (var i = 0; i < actualIndex.length; i++) {
    if (actualIndex[i] == -1) {
      actualIndex.splice(i, 1);
      continue;
    }
  }
 
  if (actualIndex.length < 2) {
    return word1Var.length;
  }
 
  let counter = 1;
  let maxVar = 0;
 
  for (var i = 0; i < actualIndex.length; i++) {
    let temp = actualIndex[i];
    for (var j = i + 1; j < actualIndex.length; j++) {
      if (temp < actualIndex[j]) {
        temp = actualIndex[j];
        counter++;
      }
    }
   
    if (maxVar < counter) {
      maxVar = counter;
    }
   
    counter = 0;
  }
 
  return word1Var.length - maxVar;
}

let word1 = ["horse", "intention"];
let word2 = ["ros", "execution"];

for (let test = 0; test < word1.length; test++) {
  console.log(chalk.green(`Test ${test + 1}:`), minDistance(word1[test], word2[test]), "|", chalk.green("Passed"));
}