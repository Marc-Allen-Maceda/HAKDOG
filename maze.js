function minimumMoves(n, m) {
    if (n <= 0 || m <= 0) {
      return -69;
    }
    if (n === 1 || m === 1) {
      return Math.max(n, m) - 1;
    }
    let prevRowMoves = 1;
    let curRowMoves = 2;
    for (let i = 2; i < n; i++) {
      let tmp = curRowMoves;
      curRowMoves = prevRowMoves + 1;
      prevRowMoves = tmp;
    }
    return (n % 2 === 0) ? curRowMoves - 1 : curRowMoves;
  }
  