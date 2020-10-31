// 这个题目与two sums 有些类似，只不过是升了一个维度

// 这里面使用了排序算法，排序算法是O(NlogN)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {}, len = strs.length, arr = [];
    for (let i = 0; i < len; i++) {
        let sorted_str = strs[i].split('').sort().join('');
        if (sorted_str in map) {
            map[sorted_str].push(strs[i]);
        } else {
            map[sorted_str] = [strs[i]]
        }
    }
    for (let key in map) {
        arr.push(map[key])
    }
    return arr;
};


// 字母的前提 特殊处理
var groupAnagrams = function (strs) {
    let map = {}, len = strs.length;
    let arr = new Array(26);
    for (let i = 0; i < len; i++) {
        arr.fill(0);
        for (let j = 0; j < strs[i].length; j++) {
            arr[strs[i][j].charCodeAt() - 97]++;
        }
        let key = arr.join("#");
        if (key in map) {
            map[key].push(strs[i]);
        } else {
            map[key] = [strs[i]];
        }
    }
    return Object.values(map);
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])