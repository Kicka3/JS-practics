
const solution = (a, b) => a.length > b.length ? b + a + b : a + b + a;

const vowel2index = (str) => str.replace(/[aeiou]/ig, (m, i) => i + 1);
