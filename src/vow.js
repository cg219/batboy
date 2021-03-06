module.exports = promise => {
    return promise
        .then(response => ([response, null]))
        .catch(err => Promise.resolve([null, err]))
}
