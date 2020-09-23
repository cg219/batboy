const { vow } = require('./../index');

const resolved = new Promise((resolve, reject) => resolve({data: "Completed"}));
const rejected = new Promise((resolve, reject) => reject({data: "Rejected"}));

const test = async () => {
    const [data1, error1] = await vow(resolved);
    const [data2, error2] = await vow(rejected);

    if (error1) console.error(`${error1.data} is an Error`)
    if (error2) console.error(`${error2.data} is an Error`)
}

(async function(){
    test();
})();
