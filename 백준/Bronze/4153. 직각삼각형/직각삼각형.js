let input = process.platform === "linux" ? require("fs").readFileSync("/dev/stdin").toString().trim() : userInput;
input = input.split("\n");
let size = input.indexOf(`0 0 0`);
let answer = [];
input = input.slice(0, size).map((v) =>v.split(" ").map(Number).sort((a, b) => a - b));
input.forEach((v) => {answer.push(v[2] * v[2] === v[0] * v[0] + v[1] * v[1] ? "right" : "wrong")});
console.log(answer.join("\n"));