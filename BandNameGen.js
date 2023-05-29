"use strict";

function bandNameGenerator(str) {
  let result = "";
  if (str[0] === str[str.length - 1]) {
    result = str.charAt(0).toUpperCase() + str.slice(1) + str.slice(1);
  } else {
    result = "The " + str.charAt(0).toUpperCase() + str.slice(1);
  }
  return result;
}
