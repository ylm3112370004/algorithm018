class ListNode {
  constructor(key, value, next, prev) {
      this.key = key;
      this.value = value;
      this.next = next;
      this.prev = prev;
  }
}

class LRUCache {
  constructor(capacity) {
      this.capacity = capacity;
      this.count = 0;
      this.map = [];
      this.dummyHead = new ListNode();
      this.dummyTail = new ListNode();
      this.dummyHead.next = this.dummyTail;
      this.dummyTail.prev = this.dummyHead;
  }
  put(key, value) {
      if (key in this.map) {
          this.map[key].value = value;
          this.moveToHead(this.map[key]);
      } else {
          let node = new ListNode(key, value);
          this.map[key] = node;
          this.addToHead(node);
          this.count++;
          if (this.count > this.capacity) {
              this.deleteTail();
          }
      }
  }
  get(key) {
      if (key in this.map) {
          let node = this.map[key];
          this.moveToHead(node);
          return node.value;
      } else {
          return -1;
      }
  }
  moveToHead(node) {
      this.removeNode(node);
      this.addToHead(node);
  }
  removeNode(node) {
      let prev = node.prev;
      let next = node.next;
      prev.next = next;
      next.prev = prev;
  }
  addToHead(node) {
      let next = this.dummyHead.next;
      node.next = next;
      next.prev = node;
      this.dummyHead.next = node;
      node.prev = this.dummyHead;
  }
  deleteTail() {
      let tailNode = this.dummyTail.prev;
      tailNode.prev.next = this.dummyTail;
      this.dummyTail.prev = tailNode.prev;
      delete this.map[tailNode.key];
  }
}