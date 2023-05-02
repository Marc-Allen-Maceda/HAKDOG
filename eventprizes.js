function small_tournament(number_of_participants, N) {
    // Calculate the maximum number of laptop bag winners
    let maxBags = Math.floor(number_of_participants / (2 * N + 1));
    
    // Calculate the maximum number of tshirt winners
    let maxShirts = N * maxBags;
    
    // Calculate the number of number_of_participants who didn't win anything
    let losers = number_of_participants - maxBags - maxShirts;
    
    // Return the result as an array
    return [maxBags, maxShirts, losers];
  }
