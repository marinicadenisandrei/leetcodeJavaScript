let nums = [[3,2,2,3], [0,1,2,2,3,0,4,2]];
let val = [3,2];

let counterTest = 1;

for (let j = 0; j < nums.length; j++) {
    for (let i = 0; i < nums[j].length; i++) {
        if (nums[j][i] == val[j]) {
            nums[j].splice(i,1);
            nums[j].push("_");
            i--;
        }
    }

    console.log(`Test ${counterTest}: [${nums[j]}] | Passed`);
    counterTest++;

}


