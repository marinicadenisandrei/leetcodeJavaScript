let s = ["Hello World","   fly me   to   the moon  ","luffy is still joyboy"];

let counterTest = 1;

for (let i = 0; i < s.length; i++) {
    s[i] = s[i].split(" ");
    s[i] = s[i].filter(x => x != "");
    console.log(`Test ${counterTest}: ${s[i][s[i].length-1].length} | Passed`);
    counterTest++;
}

