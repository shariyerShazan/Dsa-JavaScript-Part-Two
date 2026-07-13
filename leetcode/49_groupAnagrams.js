/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let word of strs) {
    let key = [...word].sort().join("");
    if (map.has(key)) {
      map.set(key, [...map.get(key), word]);
    } else {
      map.set(key, [word]);
    }
  }
  return [...map.values()];
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
