const tests = [121, -121, 10];

counter_test = 1;

for (let j = 0; j < tests.length; j++) {
    let flag = true;

    let text = tests[j].toString();
    let size = text.length - 1

    for (let i = 0; i < text.length; i++) {
        if(text[i] != text[size]){
            flag = false;
            break;
        }
        
        size--;
    }

    console.log(`Test ${counter_test}: ${flag} | Passed`);
    counter_test++;
}

