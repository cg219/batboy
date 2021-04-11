const { batch } = require('./../index');

(async function(){
    const array = [1, 2, 3, 4, 5];
    const results = batch(array, 2);

    console.log('Original Array:', array)
    console.log('Batched Array:', results)
})();
