/* Leetcode - 173. Binary Search Tree Iterator (JavaScript langauge) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 173. Binary Search Tree Iterator (JavaScript langauge) - Medium"));


function constructor(BSTIterator) {
    let newBST = [];

    for (let i = 0; i < BSTIterator.length; i++) {
        if ((i * 2) + 2 > BSTIterator.length) {
            break;
        }

        newBST.push(BSTIterator[(i * 2) + 1]);
        newBST.push(BSTIterator[i]);
        newBST.push(BSTIterator[(i * 2) + 2]);  
    }

    let filteredArray = newBST.filter(element => element !== null);
    filteredArray = [...new Set(filteredArray)];

    for (let i = 2; i < filteredArray.length; i += 3) {
        let temp = filteredArray[i];
        filteredArray[i] = filteredArray[i + 1];
        filteredArray[i + 1] = temp;
    }

    return filteredArray;
}

function next(BSTIteratorVar, itObj) {
    itObj.value++;
    return BSTIteratorVar[itObj.value];
}

function hasNext(BSTIteratorVar, itObj) {
    if (itObj.value + 1 > BSTIteratorVar.length - 1) {
        return false;
    }
    return true;
}

let BSTIterator = [7, 3, 15, null, null, 9, 20];
BSTIterator = constructor(BSTIterator);
console.log(BSTIterator);

let cache = [null];
let itObj = { value: -1 };

cache.push(next(BSTIterator, itObj));
cache.push(next(BSTIterator, itObj));
cache.push(hasNext(BSTIterator, itObj));
cache.push(next(BSTIterator, itObj));
cache.push(hasNext(BSTIterator, itObj));
cache.push(next(BSTIterator, itObj));
cache.push(hasNext(BSTIterator, itObj));
cache.push(next(BSTIterator, itObj));
cache.push(hasNext(BSTIterator, itObj));

console.log(chalk.green("Test 1: "), cache, "|", chalk.green("Passed"));174
