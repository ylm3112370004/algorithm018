/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let map = new Map();
  let index = 0;
  let temp = head;
  while (temp != null) {
      if (map.has(temp)) {
          console.log("tail connects to node index " + map.get(temp));
          return temp; 
      }
      map.set(temp, index++);
      temp = temp.next;
  }
  console.log("no cycle")
  return null;
};

var detectCycle = function(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
}