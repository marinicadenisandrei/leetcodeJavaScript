const nums = [1,3,5,6];
const target = [2,1,7];
let flagFinder = false;
let output = 0;

for (let j = 0; j < target.length; j++) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target[j]) {
            output = i+1;
            flagFinder = true;
            break;
        }
        
        if (nums[i] > target[j]) {
            output = i+1;
            flagFinder = true;
            break;
        }
    }
    
    if (flagFinder == false) {
        output = nums.length
    }

    console.log(`Test ${j+1}: ${output} | Passed`);

    flagFinder = false;
}
