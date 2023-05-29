"use stricht";

function alphabetWar(fight) {
  let leftSideCount = 0;
  let rightSideCount = 0;

  for (let i = 0; i < fight.length; i++) {
    const letter = fight[i];
    if ("wpbs".includes(letter)) {
      leftSideCount += { w: 4, p: 3, b: 2, s: 1 }[letter];
    } else if ("mqdz".includes(letter)) {
      rightSideCount += { m: 4, q: 3, d: 2, z: 1 }[letter];
    }
  }

  if (leftSideCount > rightSideCount) {
    return "Left side wins!";
  } else if (rightSideCount > leftSideCount) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}

console.log(alphabetWar("z")); //=> Right side wins!
console.log(alphabetWar("zdqmwpbs")); //=> Let's fight again!
console.log(alphabetWar("zzzzs")); //=> Right side wins!
console.log(alphabetWar("wwwwwwz")); //=> Left side wins!
