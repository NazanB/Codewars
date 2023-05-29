"use strict";
/*
function ageCats(humanYears) {
  let catYears = 0;

  if (humanYears >= 1) {
    if (humanYears === 1) {
      catYears = 15;
    } else if (humanYears === 2) {
      catYears = 15 + 9;
    } else {
      catYears = 15 + 9 + 4 * (humanYears - 2);
    }
  }

  return catYears;
}

function ageDog(humanYears) {
  let dogYears = 0;

  if (humanYears >= 1) {
    if (humanYears === 1) {
      dogYears = 15;
    } else if (humanYears === 2) {
      dogYears = 15 + 9;
    } else {
      dogYears = 15 + 9 + 5 * (humanYears - 2);
    }
  }

  return dogYears;
}
const humanYears = 34;
const catYears = ageCats(humanYears);
const dogYears = ageDog(humanYears);

console.log(catYears);
console.log(dogYears);
*/

var humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!
  let catYears = 0;
  let dogYears = 0;

  if (humanYears === 1) {
    catYears += 15;
    dogYears += 15;
  } else if (humanYears === 2) {
    catYears += 15 + 9;
    dogYears += 15 + 9;
  } else if (humanYears > 2) {
    catYears += 15 + 9 + (humanYears - 2) * 4;
    dogYears += 15 + 9 + (humanYears - 2) * 5;
  }
  return [humanYears, catYears, dogYears];
};

console.log(humanYearsCatYearsDogYears(34));
