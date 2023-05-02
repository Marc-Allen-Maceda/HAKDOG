function compute_half_life(NT, NO, T) {
  if (NT <= 0 || NO <= 0 || T <= 0 || NT >= NO) {
    return null;
  }
  const half_life = (T * Math.log(2)) / Math.log(NO / NT);
  return +half_life.toFixed(4);
}