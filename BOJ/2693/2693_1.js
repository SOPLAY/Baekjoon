/**
* 메모리: 9032 KB, 시간: 176 ms
* 2022.05.10
* by Alub
*/
let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
const range = parseInt(input.shift());
let arr = [];
for (let i = 0; i < range; i++) {
    input[i] = input[i]
        .split(" ")
        .map((v) => parseInt(v))
        .sort((a, b) => a - b)[7];
}
console.log(input.join("\n"));