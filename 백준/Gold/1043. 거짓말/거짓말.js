let input = process.platform === "linux" ? require("fs").readFileSync("/dev/stdin").toString().trim() : userInput;

let [[N, M], [...target], ...arr] = input.split("\n").map((v) => v.split(" ").map(Number));
arr = arr.slice(0, M).map((v) => v.slice(1, v[0] + 1));
target = target.slice(1, target[0] + 1);
let answer = 0;
let gh = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
let ch = Array.from({ length: 51 }, () => 0);
let temp = Array.from({ length: 2 }, () => 0);

//그래프 생성
const makeGh = (v, arr) => {
  if (v === 2) {
    gh[temp[0]][temp[1]] = 1;
    gh[temp[1]][temp[0]] = 1;
    return;
  } else {
    for (let t of arr) {
      if (ch[t] === 0) {
        ch[t] = 1;
        temp[v] = t;
        makeGh(v + 1, arr);
        ch[t] = 0;
      }
    }
  }
};

const checkGh = (v) => {
  if (ch[v] === 1) {
    return;
  } else {
    ch[v] = 1;
    for (let i = 0; i < gh[v].length; i++) {
      if (ch[i] === 0 && gh[v][i] === 1) {
        checkGh(i);
      }
    }
  }
};

//모임에 대한 처리
arr.forEach((vArr) => {
  makeGh(0, vArr);
});
target.forEach((v) => {
  checkGh(v);
});
arr.forEach((vArr) => {
  let check = false;
  for (let t of vArr) if (ch[t] === 1) check = true;

  check || answer++;
});
console.log(answer);