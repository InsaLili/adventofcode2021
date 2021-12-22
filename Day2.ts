const input = await Deno.readTextFile('Day2.input.txt');
const array = input.split('\n');

const result1 = array.reduce(
  (acc, curr) => {
    const x = curr.split(' ');
    const y = Number(x[1]);
    switch (x[0]) {
      case 'forward':
        acc[0] += y;
        break;
      case 'down':
        acc[1] += y;
        break;
      case 'up':
        acc[1] -= y;
        break;
    }
    return acc;
  },
  [0, 0]
);

// acc[h,v,aim]
const result2 = array.reduce(
  (acc, curr) => {
    const x = curr.split(' ');
    const y = Number(x[1]);
    switch (x[0]) {
      case 'forward':
        acc[0] += y;
        acc[1] += y * acc[2];
        break;
      case 'down':
        acc[2] += y;
        break;
      case 'up':
        acc[2] -= y;
        break;
    }
    return acc;
  },
  [0, 0, 0]
);

console.log('Result 1: ', result1[0] * result1[1]);
console.log('Result 2: ', result2[0] * result2[1]);
