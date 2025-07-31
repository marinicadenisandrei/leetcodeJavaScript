function combine(nVar, kVar) {
    let numbers = [];

    for (let i = 1; i <= nVar; i++) {
        numbers.push(i);
    }

    console.log(numbers);

    while (numbers.length > kVar) {
        
        for (let i = 1; i < numbers.length; i++) {
            let temp = [];
            temp.push(numbers[0]);

            // console.log(numbers[i]);

            for (let j = i + 1; j < i + kVar; j++) {
                temp.push(numbers[j]);
                // console.log(numbers[j])
            }

            console.log(temp);
            temp = [];
        }
        break;
    }
}


let n = 4;
let k = 2;
combine(n, k);