let input = process.platform === "linux" ? require("fs").readFileSync("/dev/stdin").toString().trim() : userInput;
input = input.split("\n").map(Number);
const size = input.shift();
let answer = [];
for (let testCase = 0; testCase < size; testCase++) {
  let [k, n] = [input.shift(), input.shift()];
  let arr = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

  for (let i = 1; i <= n; i++) arr[0][i] = i;
  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }
  answer.push(arr[k][n]);
}
console.log(answer.join("\n"));