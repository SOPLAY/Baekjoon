let input = process.platform === "linux" ? require("fs").readFileSync("/dev/stdin").toString().trim() : userInput;
let [[size], arr] = input.split("\n").map((v) => v.split(" ").map(Number));
let answer = [];
arr.slice(0, size).forEach((v, i) => {answer.splice(answer.length - v, 0, i + 1)});
console.log(answer.join(" "));