let input = process.platform === "linux" ? require("fs").readFileSync("/dev/stdin").toString().trim() : userInput;
let [[s1], arr, [s2], tArr] = input.split("\n").map((v) => v.split(" ").map(Number));
let ch = new Map();
let answer = [];
arr.slice(0, s1).forEach((v) => ch.set(v, (ch.get(v) || 0) + 1));
tArr.slice(0, s2).forEach((v) => answer.push(ch.get(v)));
console.log(answer.map((v) => (v ? v : 0)).join(" "));