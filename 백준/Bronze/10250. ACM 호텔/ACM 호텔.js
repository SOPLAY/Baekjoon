let input = process.platform === "linux" ? require("fs").readFileSync("/dev/stdin").toString().trim() : userInput;
let [[size], ...arr] = input.split("\n").map((v) => v.split(" ").map(Number));
let answer = [];
arr.slice(0, size).forEach((v) => {
  let [H, W, N] = v;
  let x = parseInt((N - 1) / H) + 1; 
  let y = parseInt((N - 1) % H) + 1;
  answer.push(`${y}${x < 10 ? "0" + x : x}`);
});

console.log(answer.join("\n"));