//백준 입력값 복붙
let userInput = `10 15
5 1 3 5 10 7 4 9 2 8`;
// 백준서버에서 입력값 받아오는 부분    전처리 X
let input = process.platform === "linux" ? require("fs").readFileSync("/dev/stdin").toString().trim() : userInput;

let [[size, current], arr] = input.split("\n").map((v) => v.split(" ").map(Number));
arr = arr.slice(0, size);
let answer = Number.MAX_SAFE_INTEGER;

let lt = 0;
let rt = 0;
let sum = arr[lt];

while (lt < size) {
  if (sum >= current) {
    answer = Math.min(answer, rt - lt + 1);
    sum -= arr[lt++];
  } else {
    rt++;
    if (rt === size) break;
    sum += arr[rt];
  }
}

console.log(answer === Number.MAX_SAFE_INTEGER ? 0 : answer);
