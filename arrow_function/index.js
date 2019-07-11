const foo = (a = 1, b = a + 2) => {
  console.log(a, b);
};
foo(5, 6);

/*Fix this*/
const person = {
  name: 'thai',
  hobbies: ['eating', 'coding'],
  showHobbies: function() {
    // const _this = this;
    this.hobbies.map(item => {
      console.log(this.name);
    });
  }
};
// person.showHobbies();

/*for ... of loop*/
const profile = ['thai', 'truong hong'];
for (let index in profile) {
  console.log(index);
}
