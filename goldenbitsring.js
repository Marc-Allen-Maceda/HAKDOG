function countGoldenBitstrings(n) {
    const mod = 1e9 + 7; // 10^9 + 7
    let dp = [2, 3];
    for (let i = 3; i <= n; i++) {
      dp[i%2] = (dp[(i-1)%2] + dp[(i-2)%2]) % mod;
    }
    return dp[n%2];
  }
  