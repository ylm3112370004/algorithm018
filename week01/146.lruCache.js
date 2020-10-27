var ListNode = function(key, val) {
  this.key = key;
  this.val = val;
  this.next = null;
  this.prev = null;
}

/**
* @param {number} capacity
*/
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.count = 0;
  this.hashMap = {};
  this.dummyHead = new ListNode();
  this.dummyTail = new ListNode();
  this.dummyHead.next = this.dummyTail;
  this.dummyTail.prev = this.dummyHead;
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  let node = this.hashMap[key];
  if (node === undefined) {
      return -1;
  }
  this.moveToHead(node);
  return node.val;
};

LRUCache.prototype.moveToHead = function(node) {
  this.deleteFromList(node);
  this.addToHead(node);
}

LRUCache.prototype.deleteFromList = function(node) {
  let next = node.next;
  let prev = node.prev;
  
  prev.next = next;
  next.prev = prev;
}

LRUCache.prototype.addToHead = function(node) {
  node.prev = this.dummyHead;
node.next = this.dummyHead.next;
this.dummyHead.next.prev = node;
this.dummyHead.next = node;
}

/** 
* @param {number} key 
* @param {number} val
* @return {void}
*/
LRUCache.prototype.put = function(key, val) {
  let node = this.hashMap[key];
  if (node === undefined) {
      // new 
      node = new ListNode(key, val);
      this.hashMap[key] = node;
      this.addToHead(node);
      this.count++;
      if (this.count > this.capacity) {
          this.removeListItem();
      }
  } else {
      // old
      node.val = val;
      this.moveToHead(node);
  }
};

LRUCache.prototype.removeListItem = function() {
  let tailNode = this.popTail();
  delete this.hashMap[tailNode.key];
  this.count--;
}

LRUCache.prototype.popTail = function() {
  let tailNode = this.dummyTail.prev;
  this.deleteFromList(tailNode);
  return tailNode;
}

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,val)
*/