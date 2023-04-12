/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
        const ans = []
    for (let i = 0; i <= s.length; i++) {
        s[i] == '*' ? ans.pop() : ans.push(s[i])
    }
    return ans.join("")
};