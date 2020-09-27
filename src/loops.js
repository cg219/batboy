module.exports.reduce = async (arr, callback, initial) => {
    return await arr.reduce((acc, cur, i, src) => callback(acc, cur, i, src), initial);
}

module.exports.map = async (arr, callback) => {
    return Promise.all(arr.map((cur, i, src) => callback(cur, i, src)));
}
