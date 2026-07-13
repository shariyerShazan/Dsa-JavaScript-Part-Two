// /**
//  * @param {number[]} height
//  * @return {number}
//  */

// var maxArea = function (height) {
//   let maxA = 0;
//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       let width = j - i;
//       let h = Math.min(height[i], height[j]);
//       let area = width * h;
//       maxA = Math.max(maxA, area);
//     }
//   }
//   return maxA;
// };

var maxArea = function (height) {
  let maxA = 0;
  let left = 0,
    right = height.length - 1;
  while (left < right) {
    let width = right - left;
    let h = Math.min(height[left], height[right]);
    let area = width * h;
    maxA = Math.max(maxA, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxA;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));