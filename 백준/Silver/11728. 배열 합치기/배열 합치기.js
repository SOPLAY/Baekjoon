let input = process.platform === "linux" ? require("fs").readFileSync("/dev/stdin").toString().trim() : userInput;
let [[s1, s2], arr1, arr2] = input.split("\n").map((v) => v.split(" ").map(Number));
arr1 = arr1.slice(0, s1);
arr2 = arr2.slice(0, s2);
let answer = [];
let index1 = 0;
let index2 = 0;
while (index1 < s1 && index2 < s2) {
  arr1[index1] <= arr2[index2] ? answer.push(arr1[index1++]) : answer.push(arr2[index2++]);
}
if (index1 < s1) {
  for (let i = index1; i < s1; i++) answer.push(arr1[i]);
} else {
  for (let i = index2; i < s2; i++) answer.push(arr2[i]);
}

console.log(answer.join(" "));