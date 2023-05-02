function trader(stock_prices) {
    let maxStreak = 1; // initialize maximum streak to 1
    let currentStreak = 1; // initialize current streak to 1
  
    // loop through the array starting from the second element
    for (let i = 1; i < stock_prices.length; i++) {
      // check if the current price is greater than the previous price
      if (stock_prices[i] > stock_prices[i - 1]) {
        currentStreak++; // increment the current streak
      } else {
        // reset the current streak if the current price is not greater than the previous price
        currentStreak = 1;
      }
  
      // update the maximum streak if the current streak is greater than the maximum streak
      if (currentStreak > maxStreak) {
        maxStreak = currentStreak;
      }
    }
  
    return maxStreak;
  }
  
  console.log(trader([3, 2, 1, 1]))