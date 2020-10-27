/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let map = {}, len = s.length;
  for (let i = 0; i < len; i++) {
      if (s[i] in map) {
          map[s[i]]++;
      } else {
          map[s[i]] = 1;
      }
      if (t[i] in map) {
          map[t[i]]--;
      } else {
          map[t[i]] = -1;
      }
  }
  for (let key in map) { //max 26
      if (map[key] !== 0) {
          return false;
      }
  }
  return true;
};
