const { vow } = require('./../index');

const resolved = new Promise((resolve, reject) => resolve({data: "This was Completed"}));
const rejected = new Promise((resolve, reject) => reject({data: "This was Rejected"}));

(async function(){
    const [data1, error1] = await vow(resolved);
    const [data2, error2] = await vow(rejected);

    if (data1) console.error(`Data1: ${data1.data}`)
    if (data2) console.error(`Data2: ${data2.data}`)
    if (error1) console.error(`Data1: ${error1.data}`)
    if (error2) console.error(`Data2: ${error2.data}`)
})();
