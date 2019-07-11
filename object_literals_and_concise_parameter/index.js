/*Concise (kən'sais) Paramerers:   ngắn gọn, xúc tích*/

const a = 1;
const b = 2;
const obj = { a, b };
// console.log(obj);

/*  get deep key in object*/
const profile = {
  id: {
    fullName: {
      firstName: 'thai',
      lastName: 'truong'
    }
  }
};
const {
  id: {
    fullName: { firstName }
  }
} = profile;
console.log(firstName);
