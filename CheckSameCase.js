function sameCase(a, b) {
  if (!(a.toLowerCase() !== a.toUpperCase())) {
    return -1;
  }
  if (!(b.toLowerCase() !== b.toUpperCase())) {
    return -1;
  }

  if (a.toLowerCase() === a) {
    if (b.toLowerCase() === b) {
      return 1;
    }
  } else if (a.toUpperCase() === a) {
    if (b.toUpperCase() === b) {
      return 1;
    }
  }

  return 0;
}
