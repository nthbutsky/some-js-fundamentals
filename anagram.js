anagram("friend", "finder"); // true
anagram("hello", "bye"); // false

const anagram = (a, b) =>
  [...a.toLowerCase()].sort().toString() ===
  [...b.toLowerCase()].sort().toString();
