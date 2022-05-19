let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
class Queue {
    constructor() {
        this.arr = [];
    }
    push(num = 0) {
        this.arr.push(num);
    }
    pop() {
        return this.arr.length != 0 ? this.arr.shift() : -1;
    }
    size() {
        return this.arr.length;
    }
    empty() {
        return this.size() == 0 ? 1 : 0;
    }
    front() {
        return this.size() != 0 ? this.arr[0] : -1;
    }
    back() {
        return this.size() != 0 ? this.arr[this.arr.length - 1] : -1;
    }
}

function binding(callBackQueue, str = "") {
    let funcStr = str.split(" ");
    switch (funcStr[0]) {
        case "push":
            callBackQueue.push(parseInt(funcStr[1]));
            break;
        case "pop":
            return callBackQueue.pop();
            break;
        case "size":
            return callBackQueue.size();
            break;
        case "empty":
            return callBackQueue.empty();
            break;
        case "front":
            return callBackQueue.front();
            break;
        case "back":
            return callBackQueue.back();
            break;
        default:
            throw new Error("바인딩 오류 발생");
            break;
    }
}
const range = parseInt(input.shift());
let queue = new Queue();
input = input.slice(0, range);
let res = input.map((v) => binding(queue, v)).filter((v) => v !== undefined).join("\n");
console.log(res);