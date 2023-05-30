function findAverage(array) {
  let Average = 0;
  for (let i = 0; i < array.length; i++) {
    Average += array[i];
  }
  if (array.length === 0) {
    return 0;
  } else return Average / array.length;
}
