// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function (s) {
//   const str = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
//   const rev = str.split("").reverse().join("");
//   return str === rev ? true : false;
// };
// console.log(isPalindrome("A man, a plan, a cana: Panama"));

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const str = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
  let result = true;
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      result = false;
      break;
    }
    left++;
    right--;
  }
  return result;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
