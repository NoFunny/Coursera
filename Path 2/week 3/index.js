/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
    var promises = [];
    for (var i = 0; i < operations.length; i++) {
        var operation = operations[i];
        var prom = new Promise(function (resolve, reject) {
            operation(function callback(err, data) {
                if (err)
                    reject(err);
                else
                    resolve(data);
            });
        });
        promises.push(prom);
    }
    Promise.all(promises)
        .then(data => callback(null, data))
        .catch(err => callback(err));
};