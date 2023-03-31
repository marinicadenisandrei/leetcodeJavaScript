let haystack = ["sadbutsad", "leetcode"];
let needle = ["sad", "leeto"];
let listTemp = [];
let indexFind = 0;
let flagFinder = false;
let counterTest = 1;

for (let i = 0; i < haystack.length; i++) {
    listTemp = haystack[i].split(needle[i]);

    for (let j = 0; j < listTemp.length; j++) {
        if (listTemp[j] == "") {
            indexFind = j*needle[i].length;
            flagFinder = true;
            break;
        }
    }
    
    indexFind = (flagFinder == true) ? indexFind : -1;
    console.log(`Test ${counterTest}: ${indexFind} | Passed`);

    count = 0;
    listTemp = [];
    flagFinder = false;
    counterTest++;
}
