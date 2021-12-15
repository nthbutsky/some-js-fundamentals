console.log(findVowels("hello")); // 2
console.log(findVowels("by")); // 0

function findVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }
  return count;
}

function findVowels2(str) {
  const matched = str.match(/[aeiou]/gi);
  return matched ? matched.length : 0;
}
