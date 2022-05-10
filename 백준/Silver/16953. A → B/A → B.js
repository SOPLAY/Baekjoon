let input = process.platform === "linux" ? require("fs").readFileSync("/dev/stdin").toString().trim() : userInput;
let [currentValue, targetValue] = input.split(" ").map(Number);
let answer = Number.MAX_SAFE_INTEGER;
const DFS = (v, cnt) => {
  if (v > targetValue) return;
  if (v === targetValue) {
    answer = Math.min(answer, cnt);
  } else {
    DFS(v * 2, cnt + 1);
    DFS(v * 10 + 1, cnt + 1);
  }
};
DFS(currentValue, 0);

answer = answer === Number.MAX_SAFE_INTEGER ? -1 : answer + 1;

console.log(answer);