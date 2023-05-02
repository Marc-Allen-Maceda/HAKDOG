function counting_zeros(arr) {
    if (!Array.isArray(arr) || arr.length === 0 || !arr.every(num => Number.isInteger(num) && num >= 0)) {
      throw new Error(err);
    }
    
    let countZeros = 0;
    let countNonZeros = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        countZeros++;
      } else if (arr[i] % 10 === 0) {
        countZeros++;
      } else {
        countNonZeros++;
      }
    }
  
    return countZeros + Math.floor(countNonZeros/2);
  }
  

  console.log(counting_zeros([100, 0, 105, 15]))