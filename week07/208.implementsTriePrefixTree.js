// https://leetcode-cn.com/problems/implement-trie-prefix-tree/

// 终止符
const $ = Symbol("$");
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = Object.create(null);
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let c of word) {
        if (!node[c]) node[c] = Object.create(null);
        node = node[c];
    }
    if (!($ in node)) node[$] = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.findPart(word);
    return (node && node[$] === true)? true: false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return (this.findPart(prefix))? true: false;
};

Trie.prototype.findPart = function(str) {
    let node = this.root;
    for (let c of str) {
        if (c in node) {
            node = node[c];
        } else {
            return null;
        }
    }
    return node;
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */