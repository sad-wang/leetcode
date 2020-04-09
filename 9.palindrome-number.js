/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (46.29%)
 * Likes:    2060
 * Dislikes: 1500
 * Total Accepted:    849K
 * Total Submissions: 1.8M
 * Testcase Example:  '121'
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 * 
 * Example 1:
 * 
 * 
 * Input: 121
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a
 * palindrome.
 * 
 * 
 * Follow up:
 * 
 * Coud you solve it without converting the integer to a string?
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
    if (x < 0) return false
    let str = x + ''
    let loop = str.length % 2 == 0 ? str.length / 2 : (str.length - 1) / 2
    for (let i = 0; i < loop; i++){
        if (str.charAt(i) !== str.charAt(str.length-i-1)) return false
    }
    return true
}
// @lc code=end
