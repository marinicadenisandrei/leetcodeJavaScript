/* Leetcode - 96. Unique Binary Search Trees (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 96. Unique Binary Search Trees (JavaScript language) - Medium"))

function compareTwoArrays(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false;
        }
    }

    return true;
}

function arraySorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }

    return true;
}

function arraysEleGtRoot(array, root) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < root) {
            return false;
        }
    }

    return true;
}

function arraysEleLtRoot(array, root) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > root) {
            return false;
        }
    }

    return true;
}

function generateTrees(nVar) {
    let numbers = [];
    let combinations = [];

    for (let i = 1; i <= nVar; i++) {
        numbers.push(i);
    }

    if (nVar == 1) {
        return nVar;
    }

    let originalNumbers = [...numbers];
    let index1 = 0;
    let index2 = 1;

    combinations.push([...numbers]);
    [numbers[index1], numbers[index2]] = [numbers[index2], numbers[index1]];
    combinations.push([...numbers]);

    index1++;
    index2++;   

    while (!compareTwoArrays(numbers, originalNumbers)) {
        if (index2 < nVar) {
            [numbers[index1], numbers[index2]] = [numbers[index2], numbers[index1]];
        }    
        else
        {
            [numbers[0], numbers[2]] = [numbers[2], numbers[0]];

            index1 = -1;
            index2 = 0;
        }

        index1++;
        index2++;

        combinations.push([...numbers]);
    }

    combinations.pop();

    let potentialBTS = [];

    for (let i = 0; i < combinations.length; i++) {
        potentialBTS.push([...combinations[i]]);
        let copyComb = [...combinations[i]];

        for (let j = 1; j < nVar ; j += 1) {
            combinations[i].splice(j,0,0);
            potentialBTS.push([...combinations[i]]);
            combinations[i].splice(j + 2,0,0);
            potentialBTS.push([...combinations[i]]);
        }

        combinations[i] = [...copyComb];

        for (let j = combinations[i].length - 1; j > 0 ; j--) {
            combinations[i].splice(j,0,0);
            potentialBTS.push([...combinations[i]]);
        }

        combinations[i] = [...copyComb];

        for (let j = combinations[i].length - 1; j > 0 ; j-=1) {
            combinations[i].splice(j,0,0);
            potentialBTS.push([...combinations[i]]);
            combinations[i].splice(j,0,0);
            potentialBTS.push([...combinations[i]]);
        }
    }

    for (let j = 0; j < potentialBTS.length; j++) {
        let stop = potentialBTS[j].length;
        
        for (let i = 0; i < stop; i++) {
            if (potentialBTS[j][i] == 0) {
                potentialBTS[j].splice((i * 2) + 1,0,0);
                potentialBTS[j].splice((i * 2) + 2,0,0);
            }
        }
    }

    let acumulation = [];

    for (let i = 0; i < potentialBTS.length; i++) {
        let left = [];
        let right = [];

        let index = 0;

        for (let j = 1; j < potentialBTS[i].length; j += index) {
            left.push(potentialBTS[i][j]);
            right.push(potentialBTS[i][j * 2])

            index += 2;
        }

        left = left.filter(element => element !== 0 && element != undefined);
        right = right.filter(element => element !== 0 && element != undefined);

        let flagBTS = true;

        for (let j = 0; j < potentialBTS[i].length; j++) {
            if ((j * 2) + 2 > potentialBTS[i].length - 1) {
                break;
            }

            if (potentialBTS[i][j] == 0 && (potentialBTS[i][(j * 2) + 1] != 0 || potentialBTS[i][(j * 2) + 2] != 0)) {
                flagBTS = false;
                break;
            }

            if (potentialBTS[i][j] < potentialBTS[i][(j * 2) + 1] || potentialBTS[i][(j * 2) + 1] > potentialBTS[i][(j * 2) + 2] || potentialBTS[i][j] > potentialBTS[i][(j * 2) + 2]) {
                if (potentialBTS[i][(j * 2) + 1] == 0 && potentialBTS[i][(j * 2) + 2] != 0) {
                    flagBTS = false;
                    break;
                }
                else if (potentialBTS[i][j] == 0 < potentialBTS[i][(j * 2) + 1])
                {
                    flagBTS = false;
                    break;
                }
            }  
        }

        let leftR = [];
        let rightR = [];

        let check = [...potentialBTS[i]];
        check.shift();

        let cut = 2;

        while (check.length > 0) {
            let sliceVar = check.slice(0, cut);
            
            for (let j = 0; j < sliceVar.length / 2; j++) leftR.push(sliceVar[j])
            for (let j = sliceVar.length / 2; j < sliceVar.length; j++) rightR.push(sliceVar[j])
            
            check.splice(0,cut);
            cut = Math.pow(cut,2);
        }

        for (let j = 0; j < leftR.length; j++) {
            if (leftR[j] > potentialBTS[i][0] && leftR[j] != 0) {
                flagBTS = false;
                break;
            }
        }

        for (let j = 0; j < rightR.length; j++) {
            if (rightR[j] < potentialBTS[i][0] && rightR[j] != 0) {
                flagBTS = false;
                break;
            }
        }
        
        if (arraySorted(left) && arraySorted(right) && flagBTS && arraysEleGtRoot(right, potentialBTS[i][0]) && arraysEleLtRoot(left, potentialBTS[i][0]))
        {
            acumulation.push(potentialBTS[i]);
        }
    }

    for (let i = 0; i < acumulation.length; i++) {
        while (acumulation[i][acumulation[i].length - 1] == 0) {
            acumulation[i].pop();
        }
    }

    for (let i = 0; i < acumulation.length; i++) {
        if (acumulation[i].length > (nVar * 2) + 1) {
            acumulation.splice(i,1);
        }
    }

    const uniqueArrayOfArrays = Array.from(new Set(acumulation.map(JSON.stringify)), JSON.parse);
    
    return uniqueArrayOfArrays.length;
}

let n = [3,1];

for (let test = 0; test < n.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`),generateTrees(n[test]),"|", chalk.green("Passed"));    
}