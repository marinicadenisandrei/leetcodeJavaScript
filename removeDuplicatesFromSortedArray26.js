let nums = [[1,1,2], [0,0,1,1,1,2,2,3,3,4]];
let counterTest = 1;
let counterRemove = 0;

for (let j = 0; j < nums.length; j++) {
    for (let i = 0; i < nums[j].length; i++) {
        if (nums[j][i] == nums[j][i+1]) {
            nums[j].splice(i+1,1);
            counterRemove++;
            i--;
        }
    }

    for (let k = 0; k < counterRemove; k++) nums[j].push("_");

    console.log(`Test ${counterTest}: [${nums[j]}] | Passed`);
    counterTest++;
}
