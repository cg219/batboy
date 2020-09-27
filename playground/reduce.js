const { reduce, wait } = require('./../index');

(async function(){
    const array = [1, 2, 3, 4, 5];
    const sum = await reduce(array, async (acc, current) => {
        acc = await acc;
        await wait(100);
        return acc + current;
    }, 0)

    console.log(`Sum: ${sum}`)

})();
