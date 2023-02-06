/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
     let res = []
    let len_s = s.length, len_p = p.length

    // function to create a map
    const track = (str) => {
        let count = {}
        for (word in str)
            count[str[word]] ? count[str[word]]++ : count[str[word]] = 1
    
        return count
    }

    if (len_p > len_s) {
        return []
    }


    
    // map of string p
    let current = track(p)

    let r_pointer = 0,  l_ponter = 0, count = 0

    while (r_pointer < len_s) {
        if (current[s[r_pointer]] > 0) count++
        current[s[r_pointer]]--
        r_pointer++
        if (count == len_p) res.push(l_ponter)
        if (r_pointer - l_ponter == len_p) {
            if (current[s[l_ponter]] >= 0) count--
            current[s[l_ponter]]++
            l_ponter++
        }
    }

    return res
};