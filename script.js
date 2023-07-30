function threeSum(S, target) {
  S.sort((a, b) => a - b); // Sort the array in ascending order
  let closestSum = Infinity;

  for (let i = 0; i < S.length - 2; i++) {
    let left = i + 1;
    let right = S.length - 1;

    while (left < right) {
      const sum = S[i] + S[left] + S[right];

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum; // Exact match found, return the sum
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;
