/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (44.98%)
 * Likes:    13168
 * Dislikes: 474
 * Total Accepted:    2.5M
 * Total Submissions: 5.5M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * Example:
 * 
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
{
	//暴力破解
	//O(n2)
	let twoSum = function (nums, target) {
		for (let i = 0; i < nums.length; i++) {
			for (let j = i + 1; j < nums.length; j++) {
				if (nums[i] + nums[j] === target) return [i, j];
			}
		}
	};
	}
{
	//Hash表
	let twoSum = function (nums, target) {
		let numsMap = new Map()
		for (let i = 0; i < nums.length; i++) {
			if (numsMap.has(target-nums[i])) return[numsMap.get(target-nums[i]),i]
			numsMap.set(nums[i],i)
		}
	};
}
// @lc code=end
