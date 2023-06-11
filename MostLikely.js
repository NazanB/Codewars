function mostLikely(prob1, prob2) {
  const numfield1 = prob1.split(":");
  const numfield2 = prob2.split(":");

  return numfield1[0] / numfield1[1] > numfield2[0] / numfield2[1];
}
console.log(mostLikely("1:3", "1:2"));
