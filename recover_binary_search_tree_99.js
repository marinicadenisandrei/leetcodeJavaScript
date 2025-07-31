/* Leetcode - 99. Recover Binary Search Tree (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 99. Recover Binary Search Tree (JavaScript language) - Medium"));

function recoverTree(rootVar) {
    let rootVarCopy = rootVar.slice();
    let COPY = rootVar.slice();
    let rootVarLen = rootVar.length;
    let depth = 1;
    let index1 = 0;
    let index2 = 1;
    let power = 1;

    while (power < rootVarLen) {
        power *= 2
    }

    power -= 1;

    for (let i = 1; i <= rootVarLen; i++) {
        depth *= i;
    }

    for (let j = 0; j < rootVarLen; j++) {
        for (let i = 0; i < depth; i++) {
            if (index2 < rootVarLen) {
                [rootVar[index1], rootVar[index2]] = [rootVar[index2], rootVar[index1]];
            }
            else
            {
                [rootVar[0], rootVar[rootVarLen - 1]] = [rootVar[rootVarLen - 1], rootVar[0]];
                index1 = -1;
                index2 = 0;
            }
    
            index1++;
            index2++;
            
            let flag = true;

            for (let k = 0; k < rootVar.length; k++) {
                if (rootVar[(k * 2) + 2] >= rootVar.length - 1) {
                    break;                    
                }

                if (rootVar[k] < rootVar[(k * 2) + 1] || rootVar[(k * 2) + 1] > rootVar[(k * 2) + 2] || rootVar[(k * 2) + 2] < rootVar[k]) {
                    if (rootVar[k] == null || rootVar[(k * 2) + 1] == null || rootVar[(k * 2) + 2] == null) {
                        if (rootVar[k] == null && (rootVar[(k * 2) + 1] != null || rootVar[(k * 2) + 2] != null)) {
                            flag = false;
                            break;
                        }
                        
                        if (rootVar[(k * 2) + 1] == null && rootVar[k] > rootVar[(k * 2) + 2] && rootVar[k] != null && rootVar[(k * 2) + 2] != null) {
                            flag = false;
                            break;
                        }
                    }
                    else
                    {
                        flag = false;
                        break;
                    }
                }
            }

            let counter = 0;

            for (let k = 0; k < COPY.length; k++) {
                if (COPY[k] != rootVar[k]) {
                    counter++;
                }
            }
            
            if (flag && counter <= 2) {
                return rootVar;
            }
        }

        rootVarCopy.unshift(rootVarCopy[rootVarLen - 1]);
        rootVarCopy.pop();
        rootVar = rootVarCopy.slice();
    }
   

    
}

let root = [[1,3,null,null,2],[3,1,4,null,null,2]];

for (let test = 0; test < root.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`) ,recoverTree(root[test]), "|", chalk.green("Passed"));    
}


