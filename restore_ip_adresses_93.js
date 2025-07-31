/* Leetcode - 93. Restore IP Addresses (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 93. Restore IP Addresses (JavaScript language) - Medium"))

function restoreIpAddresses(sVar) {
    let blocked = 0;
    let replacer = "";

    if (sVar.includes("255")) {
        const regex = new RegExp("255", 'g');
        const matches = sVar.match(regex);
        blocked = matches.length;

        for (let i = 0; i < matches.length; i++) {
            replacer += matches[i] + ".";
        }

        sVar = sVar.replace(new RegExp("255", 'g'), "");    
    }

    sVar = sVar.split("");
    let ipFormation = "";
    let ips = [];
    
    for (let i = 0; i < sVar.length; i++) {
        if (sVar.length - ipFormation.length >= 5 - blocked) {
            ipFormation += sVar[i];
        }
        else
        {
            ipFormation += sVar[i] + ".";
        }
    }

    ipFormation = ipFormation.slice(0,-1);
    let copyIp = ipFormation;

    ips.push(ipFormation);

    let counter = 0;
    let flag = true;

    while (flag)
    {
        flag = false;

        for (let i = ipFormation.length - 2; i >= 0; i--) {
            if (ipFormation[i] == '.' && ipFormation[i - 2] != '.') {
                let arr = ipFormation.split("");
                let temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
                
                ipFormation = arr.join("");

                ips.push(arr.join(""));
                flag = true;

                break;
            }
        }
    }

    ipFormation = copyIp;

    flag = true;

    while (flag)
    {
        flag = false;

        for (let i = 2; i < ipFormation.length; i++) {
            if (ipFormation[i] == '.' && ipFormation[i - 2] != '.') {
                let arr = ipFormation.split("");
                let temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
                
                ipFormation = arr.join("");

                ips.push(arr.join(""));
                flag = true;
                
                break;
            }
        }
    }

    for (let i = 0; i < ips.length; i++) {
        let arr = ips[i].split(".");
        
        if (arr.length != 4 - blocked || arr[0] == '') {
            ips.splice(i,1);
            i--;
        }
        else
        {
            for (let j = 0; j < arr.length; j++) {
                if ((arr[j].length > 1 && arr[j][0] == '0') || Number(arr[j] > 255)) {
                    ips.splice(i,1);
                    
                    i -= ((i == 0) ? 0 : 1);
                }
            }
        }
    }  

    if (blocked > 0) {
        let temp = [];

        for (let i = 0; i < ips.length; i++) {
            temp.push(replacer + ips[i]);
        }

        ips = temp;
    }

    let uniqueIps = [... new Set(ips)];

    return uniqueIps;
}

s = ["25525511135","101023","0000"]

for (let test = 0; test < s.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), restoreIpAddresses(s[test]), "|", chalk.green("Passed")); 
}
