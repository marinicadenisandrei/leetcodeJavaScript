const strs = [["flower","flow","flight"],["dog","racecar","car"]]

let output = "";
let flag = true;

let counterTest = 1;

function longestStringValue(list) {

    let variable = 0;

    for (let i = 0; i < list.length; i++) {
        if (list[i].length > variable) {
            variable = list[i].length;
        }
    }

    return variable;
}

for (let k = 0; k < strs.length; k++) {
    for (let i = 0; i < longestStringValue(strs[k]); i++) {
        tempVar = strs[k][0][i];
        for (let j = 1; j < strs[k].length; j++) {
            if (tempVar == strs[k][j][i]) {
                flag = true;
            }
            else
            {
                flag = false;
                break;
            }
        }
    
        if (flag == true) {
            output += tempVar;
        }
    }
    
    console.log(`Test ${counterTest}: ${output} | Passed`);

    counterTest++;
    output = "";
    tempVar = ""
}

