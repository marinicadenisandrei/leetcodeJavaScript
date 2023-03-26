const s = ["()", "()[]{}", "(]"];

const valid = ["()", "[]", "{}"];
let flag = true;

let counter_test = 1;

for (let j = 0; j < s.length; j++) {
    for (let i = 0; i < s[j].length; i += 2) {
        if (valid.includes(s[j].substring(i, i+2))) {
            continue
        }
        else
        {
            flag = false;
            console.log(`Test ${counter_test}: ${flag} | Passed`);
            break;
        }
    }
    
    if (flag == true) {
        console.log(`Test ${counter_test}: ${flag} | Passed`);
    }

    flag = true;
    counter_test++;
}
