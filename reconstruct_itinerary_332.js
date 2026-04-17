/* Leetcode - 332. Reconstruct Itinerary (JavaScript) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 332. Reconstruct Itinerary (JavaScript) -"), chalk.red("Hard"));


function findItinerary(ticketsVar) {
    let flag = true;
    let result = [];

    while (flag) {
        flag = false;

        for (let i = 0; i < ticketsVar.length - 1; i++) {
            if (ticketsVar[i][1] !== ticketsVar[i + 1][0]) {
                let elementIndex = -1;

                for (let j = i + 1; j < ticketsVar.length; j++) {
                    if (ticketsVar[i][1] === ticketsVar[j][0]) {
                        elementIndex = j;
                        break;
                    }
                }

                if (elementIndex !== -1) {
                    [ticketsVar[i + 1], ticketsVar[elementIndex]] =
                        [ticketsVar[elementIndex], ticketsVar[i + 1]];
                    flag = true;
                }
            }
        }
    }


    if (ticketsVar.length > 0) {
        result.push(ticketsVar[0][0]);

        for (let i = 0; i < ticketsVar.length; i++) {
            result.push(ticketsVar[i][1]);
        }
    }

    return result;
}

let tickets = [[["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]],[["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]];

for (let test = 0; test < tickets.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        findItinerary(tickets),
        "|",
        chalk.green("Passed")
    );
}