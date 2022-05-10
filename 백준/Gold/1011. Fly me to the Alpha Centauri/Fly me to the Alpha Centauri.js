let input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map((v) => v.split(" ").map((v2) => parseInt(v2)));
const size = input.shift();
let move = input.map((v) => v.reduce((acc, cur) => (cur -= acc))).slice(0, size);
let res = [];
move.forEach((v) => {
    let sqrt = Math.sqrt(v);
    let round = Math.round(sqrt);
    res.push(sqrt <= round ? 2 * round - 1 : 2 * round);
});
console.log(res.join("\n"));