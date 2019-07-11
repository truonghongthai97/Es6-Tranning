const createdPromise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve('success');
  }, 3000);
});
createdPromise.then(data => console.log(data)).catch(err => console.log(err));
