/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let prefix = []
    let suffix = []

    prefix[0] = 1
    suffix[nums.length - 1] = 1
    

    for (let i = 1; i < nums.length; i++) {
        prefix[i] = nums[i - 1] * prefix[i - 1]
    }
    
    for (let i = nums.length - 2; i >= 0; i--)
        suffix[i] = nums[i + 1] * suffix[i + 1]
    for (let i = 0; i < nums.length; i++)
        nums[i] = prefix[i] * suffix[i]
    return nums
};