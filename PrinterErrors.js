"use strict";

function printerError(s) {
  let countError = 0;
  Array.from(s).forEach((char) => {
    /[a-mA-M]/gm.test(char) ? countError : countError++;
  });
  return countError + "/" + s.length;
}
