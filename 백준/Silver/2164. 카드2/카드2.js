let input = process.platform === "linux" ? require("fs").readFileSync("/dev/stdin").toString().trim() : userInput;
input = +input;
let arr = Array(input)
  .fill()
  .map((v, i) => i + 1);

let index = 0;
while (index !== arr.length) {
  index++;
  arr.push(arr[index++]);
}
console.log(arr[index - 2]);