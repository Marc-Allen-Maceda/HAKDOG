function minCoins(x, y, n) {
    let numX = Math.floor(n / x); // number of x bills
    let remainder = n % x; // remaining amount
    if (remainder == 0) {
      return 0; // no coins needed
    }
    let numY = Math.floor(remainder / y); // number of y bills
    let totalCoins = numX + numY; // total number of bills used
    return totalCoins;
  }
  
  // Example usage:
  console.log(minCoins(8, 3, 11)); // expected output: 0
  