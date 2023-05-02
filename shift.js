function shifts(guards) {
    let swaps = 0;
    for (let i = 0; i < guards.length - 1; i++) {
      for (let j = i + 1; j < guards.length; j++) {
        if (guards[j] < guards[i]) {
          const temp = guards[j];
          guards[j] = guards[i];
          guards[i] = temp;
          swaps++;
        }
      }
    }
    return swaps;
  }
  