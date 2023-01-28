/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    let s_len = s.length
    let t_len = t.length

    if (s_len !== t_len)
        return false

    s = s.split("").sort().join("")
    t = t.split("").sort().join("")
    for (let i = 0; i < s_len; i++) {
        if (s[i] !== t[i]) {
            return false
        }
    }
    return true

};
