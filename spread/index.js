//spread: trải ra, tràn ra
const foo = (name, ...rest) => {
  console.log(name);
};
// foo('thai', 20);

/*Create a new array*/
const a = [1, 2, 3];
const b = [...a];
const c = a;
a.push(4);
console.log(a);
console.log(c);
console.log(b);
