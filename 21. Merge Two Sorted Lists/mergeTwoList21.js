const list1 = [[1,2,4], [], []];
const list2 = [[1,3,4], [], [0]];

let counter_test = 1;

for (let j = 0; j < list1.length; j++) {

    let temp = 0;
    let output = list1[j].concat(list2[j]);

    for (let i = 0; i < output.length; i++) {
        if (output[i] > output[i+1]) {
            temp = output[i];
            output[i] = output[i+1];
            output[i+1] = temp;
            i = 0;
        }
        
    }

    console.log(`Test ${counter_test}: [${output}] | Passed`);
    counter_test += 1;
}
