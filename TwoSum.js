const nums = [[2,7,11,15], [3,2,4], [3,3]];
const target = [9,6,6];
const output = [];

let counter_test = 1;

for (let j = 0; j < nums.length; j++) {
    for (let i = 0; i < nums[j].length; i++) {
       if (nums[j][i] + nums[j][i+1] == target[j]){
        output.push(i);
        output.push(i+1);
       }
    }
    console.log(`Test ${counter_test}:`,output);
    output.splice(0,output.length);
    counter_test++;
}




