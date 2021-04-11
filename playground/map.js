const { map, wait } = require('./../index');

(async function(){
    const array = [1, 2, 3, 4, 5];
    const result = await map(array, async (current) => {
        await wait(5000);
        console.log(current)
        return current * 3;
    })

    console.log('Times 3:', result)

})();
