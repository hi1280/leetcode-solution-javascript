/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s) {
      return s;
  }
  let res = "";
  let n = s.length;
  let dp = Array.from(new Array(n), () => new Array(n).fill(false));
  let max = 0;
  for (let j = 0; j < n; j++) {
      for (let i = 0; i < j + 1; i++) {
          dp[i][j] = (s[i] === s[j]) && ((j - i <= 2) || dp[i + 1][j - 1]);
          if (dp[i][j]) {
              if ((j - i + 1) > max) {
                  max = j - i + 1;
                  res = s.substring(i, j + 1);
              }
          }
      }
  }
  return res;
};