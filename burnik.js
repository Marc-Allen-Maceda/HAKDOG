function counting_zeros(arr) {
    // input validation check
    if (!Array.isArray(arr) || arr.length === 0 || !arr.every(num => Number.isInteger(num) && num >= 0)) {
      return
    }
    
    let countZeros = 0;
    let countNonZeros = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0 || arr[i] % 10 === 0) {
        countZeros++;
      } else {
        countNonZeros++;
      }
    }
  
    return countZeros + Math.trunc(countNonZeros/2);
  }
  
  

  console.log(counting_zeros([58, 5, 293]))