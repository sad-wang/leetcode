/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (34.40%)
 * Likes:    1476
 * Dislikes: 4235
 * Total Accepted:    426.2K
 * Total Submissions: 1.2M
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 * 
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * 
 * And then read line by line: "PAHNAPLSIIGYIR"
 * 
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 * 
 * 
 * string convert(string s, int numRows);
 * 
 * Example 1:
 * 
 * 
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 * 
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function(s, numRows) {
    if(numRows == 1) return s
    let obj = {}
    let index = 0
    let result = ''
    for (let i = 0; i < numRows; i++){
        obj[i] = ''
    }
    while (index < s.length){
        for (let i = 0; i < numRows && index < s.length; i++){
            obj[i] += s.charAt(index)
            index++
        }
        for (let i = numRows - 2; i > 0 && index < s.length; i--){
            obj[i] += s.charAt(index)
            index++
        }
    }
    for (let array in obj){
        result += obj[array]
    }
    return result
}
// @lc code=end
