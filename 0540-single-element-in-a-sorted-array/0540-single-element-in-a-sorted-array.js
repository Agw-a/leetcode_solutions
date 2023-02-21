/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    
    const numsFrequency = (num) => {
        const frequency = {}
        for (let i in num) {
            frequency[num[i]] ? frequency[num[i]] ++ : frequency[num[i]] = 1
        }
        return frequency
    }
    let object = numsFrequency(nums)
    const nonDup = Object.keys(object).find((key) => object[key] === 1)
    return nonDup

};