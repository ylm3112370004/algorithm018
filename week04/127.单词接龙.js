var ladderLength = function(beginWord, endWord, wordList) {
  if (beginWord === endWord) return 0;
  let hashMap = {};
  for (let word of wordList) {
      hashMap[word] = true;
  }
  let nums = "abcdefghijklmnopqrstuvwxyz";
  let level = 0;
  let visited = new Set();
  let queue = [beginWord];
  visited.add(beginWord);
  while (queue.length) {
      let size = queue.length;
      while (size-- > 0) {

          let word = queue.shift();
          console.log(word)
          if (word === endWord) return level;

          for (let i = 0; i<word.length; i++) {
              let wordArr = word.split("");
              for (let k = 0; k < nums.length; k++) {
                  wordArr[i] = nums[k];
                  let innerWord = wordArr.join("");
                  if (!visited.has(innerWord) && hashMap[innerWord]) {
                      queue.push(innerWord);
                      visited.add(innerWord);
                  }
              }
          }
      }
      level++;
  }
  return -1;
};

ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])
