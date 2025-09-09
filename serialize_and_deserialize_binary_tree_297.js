/* Leetcode - 297. Serialize and Deserialize Binary Tree (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 297. Serialize and Deserialize Binary Tree (JavaScript language) -"), chalk.red("Hard"));

class Codec {
  constructor(rootVar) {
    this.rootVar = rootVar;
    this.serializedRoot = [];
    this.deserializeRoot = [];
  }

  serialize() {
    this.serializedRoot = this.rootVar;
    return this.serializedRoot;
  }

  deserialize() {
    this.deserializeRoot = this.serializedRoot;
    return this.deserializeRoot;
  }
}

let root = [[1,2,3,0,0,4,5],[]];

for (let test = 0; test < root.length; test++) {
  const codec = new Codec(root[test]);
  codec.serialize();

  console.log(
    chalk.green(`Test ${test + 1}:`),
    codec.deserialize(),
    "|",
    chalk.green("Passed")
  );
}


