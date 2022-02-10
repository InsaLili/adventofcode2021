const input = await Deno.readTextFile('Day3.input.txt');
let array = input.split('\n');

// Part 2
const xLength = array[0].length;
const yLength = array.length;
const sum = array.reduce((acc, curr) => {
  const digits = curr.split('');
  for (let i = 0; i < xLength; i++) {
    acc[i] += Number(digits[i]);
  }
  return acc;
}, Array(xLength).fill(0));

const gamma = parseInt(sum.map(i => (i > yLength / 2 ? 1 : 0)).join(''), 2);
const epsilon = parseInt(sum.map(i => (i > yLength / 2 ? 0 : 1)).join(''), 2);
console.log('result 1: ', gamma * epsilon);

// Part 2
const getRating = (array, ox) => {
  for (let n = 0; array.length > 1; n++) {
    const sum = array.reduce(
      (acc, curr) => (acc += Number(curr.toString().charAt(n))),
      0
    );
    const winner = sum >= array.length / 2 ? 1 : 0;
    array = array.filter(item => {
      const number = Number(item.toString().charAt(n));
      if (ox) return number === winner;
      return number !== winner;
    });
  }
  return array[0];
};

const oxgen = parseInt(getRating(array, true), 2);
const co2 = parseInt(getRating(array, false), 2);

console.log('result 2: ', oxgen * co2);
