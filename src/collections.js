module.exports.reduce = async function reduce(arr, callback, initial) {
    return await arr.reduce((acc, cur, i, src) => callback(acc, cur, i, src), initial);
}

module.exports.map = async function map(arr, callback) {
    return Promise.all(arr.map((cur, i, src) => callback(cur, i, src)));
}

module.exports.batch = function batch(arr, limit) {
    return arr.reduce((acc, current, index) => {
        if (index % limit == 0) acc.push([]);

        acc[acc.length - 1].push(current);
        return acc;
    }, [])
}
