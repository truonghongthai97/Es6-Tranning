/*==================*/
const { x, y, z } = { x: 1, y: 2, z: 3 };
console.log(`${x} and ${y} and ${z}`);

function baz() {
  return {
    x1: 1,
    y1: 2,
    z1: 3
  };
}

/*==================*/

const { x1, y1, z1 } = baz();
console.log(`x1: ${x1} and y1: ${y1} and z1:${z1}`);

/*Assign a new variable*/
const profile = {
  city: 'da nang',
  other: {
    name: 'thai',
    age: 23
  }
};
const {
  other: { name: newName }
} = profile;
// console.log(newName);

/*Allow is assigning a value to multiple variable*/
const {x: firstVariable, x: secondVariable} = {x:1};
console.log(`firstVariable: ${firstVariable} and secondVariable: ${secondVariable}`)