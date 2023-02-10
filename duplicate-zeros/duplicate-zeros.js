/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    tmp = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            tmp.push(0)
            tmp.push(0)
        } else {
            tmp.push(arr[i])
        }
    }
    for (let i = 0; i < arr.length; i++)
        arr[i] = tmp[i]
};