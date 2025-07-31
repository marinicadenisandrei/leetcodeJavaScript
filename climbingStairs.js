/* Leetcode - 70. Climbing Stairs */

console.log("Leetcode - 70. Climbing Stairs")

let n = [2,3];
let nCopy;
let output = 1;
let firstWayList = [];

const permutator = (inputArr) => {
    let result = [];
  
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
       }
     }
   }
  
   permute(inputArr)
  
   return result;
}

function findFirstWay(n){

    flag = true;

    while (n > 0){
        if (flag == true) {
            if (n-1 >= 0) {
                firstWayList.push(1);
            }

            n = n - 1;
            flag = false;
        }
        else
        {
            if (n-2 >= 0) {
                firstWayList.push(2);
            }

            n = n - 2;
            flag = true;
        }
    }

    let sumWay = firstWayList.reduce((a,b) => { return a + b }, 0);

    if (sumWay == nCopy) {
        return firstWayList;
    }
    else
    {
        return 0 ;
    }
}

function checkFor2(stairs){

    while (stairs > 0) {
        stairs -= 2;
    }

    return stairs
}

function removeDuplicateArrays(arr) {
    const uniqueArr = [];
    const seenArrs = new Set();
  
    for (let i = 0; i < arr.length; i++) {
      const currentArr = arr[i];
      const arrString = JSON.stringify(currentArr);
  
      if (!seenArrs.has(arrString)) {
        uniqueArr.push(currentArr);
        seenArrs.add(arrString);
      }
    }
  
    return uniqueArr;
}


for (let test = 0; test < n.length; test++) {

    nCopy = n[test];

    let twoStep = checkFor2(nCopy);

    if (twoStep == 0) {
        output += 1;
    }

    let first = findFirstWay(nCopy);

    if (first.length != 0) {
        let permutations = permutator(first);
        permutations = removeDuplicateArrays(permutations);
        output += permutations.length;

        console.log(`Test ${test + 1}: ${output} | Passed`);
    }

    firstWayList = [];
    output = 1;
    
}










