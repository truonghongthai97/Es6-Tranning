const [a, b, c] = [1, 2, 3];
console.log(a, b, c);

const foo = () => {
  return [4, 5, 6];
};
const [x, y, z] = foo();
console.log(x, y, z);
