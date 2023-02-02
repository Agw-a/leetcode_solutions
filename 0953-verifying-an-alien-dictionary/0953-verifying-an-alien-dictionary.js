/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
        const letters = {}

    for (let i = 0; i < order.length; i ++) {
        letters[order[i]] = i
    }

    outer:
    for (let i = 0; i < words.length - 1; i ++) {
        const now = words[i]
        const nxt = words[i + 1]
        const min_length = Math.min(now.length, nxt.length)

        for (let i = 0; i < min_length; i++) {
            if (now[i] === nxt[i])
            continue
            if ((letters[now[i]]) < (letters[nxt[i]]))
            continue outer
            if (letters[now[i]] > letters[nxt[i]]) return false
        }
        if (now.length > nxt.length) return false
    }
    return true
};