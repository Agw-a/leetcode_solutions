/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
        const arr = {}

    for (const num of nums) {
        if (arr[num]) {
            arr[num] += 1
        } else {
            arr[num] = 1
        }
    }

    
    return Array.from(Object.entries(arr)).sort((a, b) => b[1] - a[1]).slice(0, k).map((a) => parseInt(a[0]))
};