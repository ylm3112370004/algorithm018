// 迭代
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let dummyHead = new ListNode(0, head);
  let temp = dummyHead;
  while (temp.next && temp.next.next) {
    let first = temp.next;
    let second = first.next;

    first.next = second.next;
    second.next = first;
    temp.next = second;

    temp = first;
  }
  return dummyHead.next;
}