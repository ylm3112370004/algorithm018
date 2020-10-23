/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// map 临时存储
// Time O(N) Space O(N)
var hasCycle = function(head) {
  let map = new Map();
  let temp = head;
  while (temp) {
      if (map.has(temp)) return true;
      map.set(temp, true);
          temp = temp.next;
  }
  return false;
};

// 快慢指针
// // Time O(N) Space O(1)
var hasCycle = function(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
          return true;
      }
  }
  return false;
};

// 使用 JavaScript 中的 Map 最好可以看一下底层实现