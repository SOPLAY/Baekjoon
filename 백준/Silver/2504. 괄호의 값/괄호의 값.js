let input = process.platform === "linux" ? require("fs").readFileSync("/dev/stdin").toString().trim() : userInput;

let arr = input.split("");
let types = ["(", ")", "[", "]"];
let stack = [];
let answer = 0;
arr.forEach((v) => {
  let target = types.indexOf(v);
  if (stack.length === 0 && (target === 1 || target === 3)) {
    answer = -1;
    return false;
  }
  if (target === 0 || target === 2) stack.push(v);
  // ) 일 경우
  else if (target === 1) {
    if (stack[stack.length - 1] === types[0]) {
      stack.pop();
      stack.push(2);
    } else if (stack[stack.length - 1] !== types[2] && stack[stack.length - 2] === types[0]) {
      const temp = stack.pop();
      stack.pop();
      stack.push(temp * 2);
    } else {
      answer = -1;
      return false;
    }

    // ] 일 경우
  } else if (target === 3) {
    if (stack[stack.length - 1] === types[2]) {
      stack.pop();
      stack.push(3);
    } else if (stack[stack.length - 1] !== types[0] && stack[stack.length - 2] === types[2]) {
      const temp = stack.pop();
      stack.pop();
      stack.push(temp * 3);
    } else {
      answer = -1;
    }
  }
  if (typeof stack[stack.length - 1] === "number" && typeof stack[stack.length - 2] === "number") {
    stack.push(stack.pop() + stack.pop());
  }
});
answer = answer === -1 ? 0 : stack.length !== 1 || typeof stack[0] !== "number" ? 0 : stack[0];
console.log(answer);