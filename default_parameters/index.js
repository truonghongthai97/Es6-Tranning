const calcAge = age => {
  return age + 1;
};
const showName = (name = 'chưa cập nhật', age = 0, original = calcAge(age)) => {
  //   console.log(`name: ${name}`);
  console.log(`original: ${original}`);
};
showName('thai', 20);
