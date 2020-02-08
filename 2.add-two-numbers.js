/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (32.56%)
 * Likes:    6811
 * Dislikes: 1757
 * Total Accepted:    1.2M
 * Total Submissions: 3.6M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	var sum;
	var carry = 0;
	var lists = new ListNode();
	var result = lists;
	while(l1||l2||carry>0){
		sum = 0
		if(l1!==null){
			sum += l1.val;
			l1 = l1.next;
		}
		if(l2!==null){
			sum +=l2.val;
			l2 = l2.next;
		}
		sum+=carry;
		carry=sum>=10?1:0;
		lists.val = sum%10;
		lists.next =(l2==null&&l1==null&&carry===0)?null:new ListNode();
		lists = (l2==null&&l1==null&&carry===0)?null:lists.next;
	}
	return result;
};
// @lc code=end
