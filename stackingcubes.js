function stackcubes(a, b) {
  const MOD = 1000003;
  let sum = 0;
  const memo = {};
  for (let i = a; i <= b; i++) {
    if (memo[i]) {
      sum = (sum + memo[i]) % MOD;
    } else {
      const cube = (i ** 3) % MOD;
      memo[i] = cube;
      sum = (sum + cube) % MOD;
    }
  }
  return sum;
}

  console.log(stackcubes(1,1000000000));