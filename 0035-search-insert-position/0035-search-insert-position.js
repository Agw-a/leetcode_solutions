/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
let end = nums.length - 1
let start = 0


while (start <= end){
    const mid = Math.floor((start + end) / 2)
    
    if (nums [mid] == target)
        return mid
    else if (nums[mid] < target)
        start = mid + 1
    else
        end = mid - 1
    
}
return end + 1
    
};