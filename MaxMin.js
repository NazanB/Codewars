"use strict";

const min = function (list) {
  list.sort(function (a, b) {
    return a - b;
  });
  return list[0];
};

const max = function (list) {
  list.sort(function (a, b) {
    return a - b;
  });
  return list[list.length - 1];
};
