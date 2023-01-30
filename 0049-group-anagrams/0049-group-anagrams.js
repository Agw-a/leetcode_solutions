/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagrams = {}
    
    strs.forEach((word) => {
        const sorted = word.split("").sort().join("")
        if(anagrams[sorted]) {
            anagrams[sorted].push(word)
        } else {
            anagrams[sorted] = [word]
        }
    })
    return Object.values(anagrams)
};