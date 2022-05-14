let input = process.platform === "linux" ? require("fs").readFileSync("/dev/stdin").toString().trim() : userInput;
input = +input
let sum = 1;
let answer = 0;
while (sum < input) sum += 6 * ++answer;
console.log(answer+1);