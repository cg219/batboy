const { wait } = require('./../index');

(async function(){
    console.log('Waiting 3 seconds');
    await wait(3000);
    console.log('Done Waiting');
})();
