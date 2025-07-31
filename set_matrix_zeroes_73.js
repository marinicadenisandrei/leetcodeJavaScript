/* Leetcode - 73. Set Matrix Zeroes (JavaScipt language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 73. Set Matrix Zeroes (JavaScipt language) - Medium"));

function setZeroes(matrixVar)
{
  let rowList = [];
  let colList = [];
 
  for (var i = 0; i < matrixVar.length; i++) {
    for (var j = 0; j < matrixVar[i].length; j++) {
      if (matrixVar[i][j] == 0) {
        rowList.push(i);
        colList.push(j);
      }
    }
  }
 
  for (var i = 0; i < rowList.length; i++) {
    for (var j = 0; j < matrixVar[rowList[i]].length; j++) {
      matrixVar[rowList[i]][j] = 0;
    }
   
    for (var j = 0; j < matrixVar.length; j++) {
      matrixVar[j][colList[i]] = 0;
    }
  }
 
  return matrixVar;
}

let matrix = [[[0,1,2,0],[3,4,5,2],[1,3,1,5]], [[1,1,1],[1,0,1],[1,1,1]]];

for (var test = 0; test < matrix.length; test++) {
  console.log(chalk.green(`Test ${test + 1}:`), setZeroes(matrix[test]), "|", chalk.green("Passed"));
}

