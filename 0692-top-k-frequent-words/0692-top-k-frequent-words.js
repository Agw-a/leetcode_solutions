/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let sorted = {}

    for (const word of words) {
        if (sorted[word]) {
            sorted[word] += 1
        } else {
            sorted[word] = 1
        }
    }
    return Array.from(Object.entries(sorted)).sort().sort((a, b) => b[1] - a[1]).slice(0, k).map((i) => {return [i[0]]}).flat()
};