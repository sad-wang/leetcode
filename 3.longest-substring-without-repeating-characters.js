/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (29.42%)
 * Likes:    7481
 * Dislikes: 440
 * Total Accepted:    1.3M
 * Total Submissions: 4.3M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 * 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {

    if (s.length <= 1)
        return s.length

    let lookup = new Map()
    let len = s.length
    let max = 0
    let start = 0

    for (let i = 0; i < len; i++) {
        let c = s.charAt(i)

        if (lookup.has(c) && lookup.get(c) >= start) {
            start = lookup.get(c) + 1; // Read the logic in the notes above
        }

        lookup.set(c, i)

        max = Math.max(max, i - start + 1)
    }

    return max;
}
// @lc code=end
