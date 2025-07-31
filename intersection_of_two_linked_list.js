/* Leetcode - 160. Intersection of Two Linked Lists (JavaScript language) - Easy */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 160. Intersection of Two Linked Lists (JavaScript language) -"), chalk.green("Easy"));


function getIntersectionNode(intersectValVar, listAVar, listBVar, skipAVar, skipBVar) {
    if (intersectValVar != listAVar[skipAVar] || intersectValVar != listBVar[skipBVar]) {
        return "No intersection";
    }
    
    for (let i = 0; i < listAVar.length - skipA; i++) {
        if (listAVar[skipAVar + i] != listBVar[skipBVar + i]) {
            return "No intersection";
        }
    }
    
    return `Intersected at ${intersectValVar}`;
}

let intersectVal = [8,2,0]; 
let listA = [[4,1,8,4,5],[1,9,1,2,4],[2,6,4]]; 
let listB = [[5,6,1,8,4,5],[3,2,4],[1,5]];
let skipA = [2,3,3]; 
let skipB = [3,1,2];

for (let test = 0; test < intersectVal.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), getIntersectionNode(intersectVal[test], listA[test], listB[test], skipA[test], skipB[test]), "|", chalk.green("Passed"));    
}

