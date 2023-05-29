"use strict";
//2 parameter rezept,zusaten
function cakes(recipe, available) {
  //ein leeres array erzeugt
  let quotients = [];
  //mit der schleife iteriere ich  über alle  Schlüsseln(key) von dem  Object recipe
  for (const key in recipe) {
    // damit frage ich ab ob alle zusaten vorhaneden sind
    if (key in available) {
      //zutaten / Rezept = abgerundetet gespeichert im Array
      quotients.push(Math.floor(available[key] / recipe[key]));
    } else {
      // falls im rezept eine zutat welches nicht vorhanden ist, gibt 0 zurück und beendet die funktion
      return 0;
    }
  }
  // eine callbackfunktion damit das nummerisch sortiert, ergebnisse aufsteigend sortiert
  quotients.sort(function (a, b) {
    return a - b;
  });

  return quotients[0]; //das kleinste ergebnis zurückgeben
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
