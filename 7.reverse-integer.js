/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.60%)
 * Likes:    3031
 * Dislikes: 4777
 * Total Accepted:    1M
 * Total Submissions: 3.9M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
    if (x > -10 && x < 10) return x
    let resultString = x >= 0 ? '' : '-'
    let number = Math.abs(x)
    while (number >= 1){
        resultString += number % 10
        number -= number % 10
        number /= 10
    }
    if (parseInt(resultString) < 2147483648 && parseInt(resultString) >= -2147483648){
        return parseInt(resultString)
    }
    else return 0
}
// @lc code=end
