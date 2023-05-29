"use strict";

function sumStr(a, b) {
  if (a === "") a = "0";
  if (b === "") b = "0";
  let sum = BigInt(a) + BigInt(b);
  return sum.toString();
}
console.log(sumStr("4", "5"));
