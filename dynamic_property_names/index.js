let profile = {};
function onChange(name, value) {
  profile[name] = value;
}
onChange('name', 'thai');
console.log(profile);
