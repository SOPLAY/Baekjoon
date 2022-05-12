let input = process.platform === "linux" ? require("fs").readFileSync("/dev/stdin").toString().trim() : userInput;
let [[s1], arr, [s2], tArr] = input.split("\n").map((v) => v.split(" ").map(Number));
let ch = Array.from({ length: s1 + 1 }, () => false);
let answer = [];
arr.slice(0, s1).forEach((v) => (ch[v] = true));
tArr.slice(0, s2).forEach((v) => answer.push(ch[v] ? 1 : 0));
console.log(answer.join("\n"));