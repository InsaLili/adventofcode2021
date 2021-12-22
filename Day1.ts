const input = await Deno.readTextFile('Day1.input.txt');
const array = input.split('\n').map(i => Number(i));

const result1 = array.reduce((acc, curr, i, array) => {
  if (i === 0) return 0;
  if (curr > array[i - 1]) acc += 1;
  return acc;
}, 0);

const result2 = array.reduce((acc, curr, i, array) => {
  if (i < 3) return 0;
  if (array[i] > array[i - 3]) acc += 1;
  return acc;
}, 0);

console.log('Result 1: ', result1);
console.log('Result 2: ', result2);
