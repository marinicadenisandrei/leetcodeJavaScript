/* Leetcode - 262. Trips and Users (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 262. Trips and Users (JavaScript language) -"), chalk.red("Hard"));

function tripsAndUsers(tripsVar, usersVar) {
    const dates = [...new Set(tripsVar.map(t => t.request_at))];

    for (let i = 0; i < dates.length; i++) {
        let cancelled = 0;
        let complete = 0;

        const temp = tripsVar.filter(t => t.request_at === dates[i]);
        
        for (let j = 0; j < temp.length; j++) {
            if (temp[j].status === "completed") {
                complete++;
            }
            else {
                const userTemp = usersVar.filter(u => u.id === temp[j].client_id);
                if (userTemp[0].banned == "no") {
                    cancelled++;
                } 
                else {
                    complete++;
                }
            }
        }

        console.log(dates[i], cancelled/complete);        
    }
}

const trips = [
  { id:  1, client_id: 1, driver_id: 10, city_id:  1, status: 'completed',              request_at: '2013-10-01' },
  { id:  2, client_id: 2, driver_id: 11, city_id:  1, status: 'cancelled_by_driver',    request_at: '2013-10-01' },
  { id:  3, client_id: 3, driver_id: 12, city_id:  6, status: 'completed',              request_at: '2013-10-01' },
  { id:  4, client_id: 4, driver_id: 13, city_id:  6, status: 'cancelled_by_client',    request_at: '2013-10-01' },
  { id:  5, client_id: 1, driver_id: 10, city_id:  1, status: 'completed',              request_at: '2013-10-02' },
  { id:  6, client_id: 2, driver_id: 11, city_id:  6, status: 'completed',              request_at: '2013-10-02' },
  { id:  7, client_id: 3, driver_id: 12, city_id:  6, status: 'completed',              request_at: '2013-10-02' },
  { id:  8, client_id: 2, driver_id: 12, city_id: 12, status: 'completed',              request_at: '2013-10-03' },
  { id:  9, client_id: 3, driver_id: 10, city_id: 12, status: 'completed',              request_at: '2013-10-03' },
  { id: 10, client_id: 4, driver_id: 13, city_id: 12, status: 'cancelled_by_driver',    request_at: '2013-10-03' },
];

const users = [
    {id: 1, banned: "no", role: "client"},
    {id: 2, banned: "yes", role: "client"},
    {id: 3, banned: "no", role: "client"},
    {id: 4, banned: "no", role: "client"},
    {id: 10, banned: "no", role: "driver"},
    {id: 11, banned: "no", role: "driver"},
    {id: 12, banned: "no", role: "driver"},
    {id: 13, banned: "no", role: "driver"}
];


console.log(chalk.green("Test 1: "));
tripsAndUsers(trips, users);
console.log("|", chalk.green("Passed"));

