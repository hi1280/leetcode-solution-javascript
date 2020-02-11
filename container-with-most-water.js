/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxarea = 0, l = 0, r = height.length - 1;
  while (l < r) {
      maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));
      if (height[l] < height[r])
          l++;
      else
          r--;
  }
  return maxarea;
};