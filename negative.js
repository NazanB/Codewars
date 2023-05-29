"ude strict";
// erste beispiel der lösung
function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

console.log(makeNegative(1)); // return -1

console.log(makeNegative(-5)); // return -5
console.log(makeNegative(0)); // return 0
console.log(makeNegative(0.12)); // return -0.12

/**
// 2 te beispiel zr lösung
function makeNegative(num) {
  return -Math.abs(num);
}

console.log(makeNegative(1)); // return -1
console.log(makeNegative(-5)); // return -5
console.log(makeNegative(0)); // return 0
console.log(makeNegative(0.12)); // return -0.12
*/
