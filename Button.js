"use strict";

function likeOrDislike(buttons) {
  let aktuellerzustand = "Nothing";
  for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];

    if (aktuellerzustand === "Like") {
      if (buttons[index] === "Like") {
        aktuellerzustand = "Nothing";
      } else if (buttons[index] === "Dislike") {
        aktuellerzustand = "Dislike";
      }
    } else if (aktuellerzustand === "Dislike") {
      if (buttons[index] === "Like") {
        aktuellerzustand = "Like";
      } else if (buttons[index] === "Dislike") {
        aktuellerzustand = "Nothing";
      }
    } else {
      if (buttons[index] === "Like") {
        aktuellerzustand = "Like";
      } else if (buttons[index] === "Dislike") {
        aktuellerzustand = "Dislike";
      }
    }
  }

  return aktuellerzustand;
}
/*
likeOrDislike([Dislike]); //=Dislike
likeOrDislike([Like, Like]); //= Nothing
likeOrDislike([Dislike, Like]); //= Like
likeOrDislike([Like, Dislike, Dislike]); //= Nothing
*/
console.log(likeOrDislike(["Dislike"]));
console.log(likeOrDislike(["Like", "Like"]));
