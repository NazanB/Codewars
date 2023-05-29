"use strict";

function bmi(weight, height) {
  let bmi_value = weight / (height * height);

  if (bmi_value <= 18.5) {
    return "Underweight";
  } else if (bmi_value <= 25.0) {
    return "Normal";
  } else if (bmi_value <= 30.0) {
    return "Overweight";
  } else if (bmi_value <= 45.0) {
    return "Obese";
  } else {
    return "TOT";
  }
}

console.log(bmi());
