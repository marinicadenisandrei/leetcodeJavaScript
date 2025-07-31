/* Leetocode - 105. Construct Binary Tree from Preorder and Inorder Traversal (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetocode - 105. Construct Binary Tree from Preorder and Inorder Traversal (JavaScript language) - Medium"));

function buildTree(inorderVar, postorderVar) {
    if (inorderVar.length == 1) {
        return inorderVar;
    }

    let acumulation = [];
    let root = [];
    
    let indexRoot = inorderVar.indexOf(postorderVar[postorderVar.length - 1]);
    let left = [];
    let right = [];

    acumulation.push([inorderVar[indexRoot]]);

    for (let i = 0; i < inorderVar.length; i++) {
        if (i < indexRoot) {
            left.push(inorderVar[i])
        }
        else if (i == indexRoot)
        {
            continue;
        }
        else
        {
            right.push(inorderVar[i]);
        }
    }

    acumulation.push(left);
    acumulation.push(right);

    left = [];
    right = [];

    for (let i = 0; i < acumulation.length; i++) {
        if (acumulation[i].length > 1) {
            let middle = Math.floor(acumulation[i].length / 2);
            acumulation.splice(i, 0, [acumulation[i][middle]]);

            for (let j = 0; j < acumulation[i + 1].length; j++) {
                if (j < middle) {
                    left.push(acumulation[i + 1][j])
                }
                else if (j == middle)
                {
                    continue;
                }
                else
                {
                    right.push(acumulation[i + 1][j]);
                }
            }

            acumulation.splice(i + 1, 0, left);
            acumulation.splice(i + 2, 0, right);
            acumulation.pop();

            left = [];
            right = [];
        }
    }

    for (let i = 0; i < acumulation.length; i++) {
        root.push(acumulation[i][0]);
    }

    let startIndex = 0;

    while (inorderVar.length > 3) {
        let currentLocation = inorderVar.indexOf(root[startIndex]);

        if (currentLocation <= 0 || currentLocation >= inorderVar.length - 1) {
            root.splice((startIndex * 2) + 1, 0, 0);
            root.splice((startIndex * 2) + 2, 0, 0);
        }
        
        inorderVar.splice(currentLocation, 1);
        startIndex++;
    }

    return root;
}

inorder = [[9,3,15,20,7],[-1]];
postorder = [[9,15,7,20,3],[-1]];

for (let test = 0; test < inorder.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), buildTree(inorder[test], postorder[test]), "|", chalk.green("Passed"));    
}

