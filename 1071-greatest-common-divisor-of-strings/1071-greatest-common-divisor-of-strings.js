/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
        // str1 = str1.split("")
    // str2 = str2.split("")
    // t /s if s = t + ... + t
    //at any given point s will be equal to s concatenated multiple times
    //non-computable cases
  if (str1 + str2 !== str2 + str1)
  return ""
  else if (str1 == str2)
  return str1
  else if (str1.length > str2.length)
  return gcdOfStrings(str1.slice(str2.length), str2)
  else
  return gcdOfStrings(str2.slice(str1.length), str1)
};