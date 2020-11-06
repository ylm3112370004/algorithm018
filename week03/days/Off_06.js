// 

var reversePrint = function(head) {
  let ret = [];
  let prev = null;
  let temp = head;
  while (temp) {
      temp = temp.next;
      head.next = prev;
      prev = head;
      head = temp;
  }
  while (prev) {
      ret.push(prev.val);
      prev = prev.next;
  }
  return ret;
};