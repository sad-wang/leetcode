/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (28.59%)
 * Likes:    5250
 * Dislikes: 451
 * Total Accepted:    771.5K
 * Total Submissions: 2.7M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
{
    // 通过遍历字符串，寻找 index 或 index，index-1 为中心的回文串
    let longestPalindrome = function(s) {
        if (!s) return ''
        if (s.length == 1) return s
        let maxLength = 0
        let result = ''
        let callback = (str, length) => {
            result = str
            maxLength = length
        }
        for (let i = 1; i < s.length; i++){
            let oddStr = checkPalindromic(s, i, i)
            let evenStr = checkPalindromic(s, i-1, i)
            replaceMaxLengthAndResult(oddStr, maxLength, callback)
            replaceMaxLengthAndResult(evenStr, maxLength, callback)
        }
        return result
    }
    function replaceMaxLengthAndResult(str, maxLength,callback) {
        if (str.length > maxLength){
            callback(str, str.length)
        }
    }
    function checkPalindromic(s, left, right) {
        let str = ''
        while (s.charAt(left) == s.charAt(right) && left >= 0 && right < s.length){
            str = s.substring(left, right+1)
            left--
            right++
        }
        return str
    }
}
// @lc code=end
