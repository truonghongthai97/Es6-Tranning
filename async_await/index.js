const createdPromise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve('success');
  }, 3000);
});

const getValue = async () => {
  try {
    const result = await createdPromise;
    console.log('TCL: result', result);
  } catch (error) {
    console.log('TCL: getValue -> error', error);
  }
};
getValue();
