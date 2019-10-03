/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var objTime = {
        init: function (date) {
            this.newDate = new Date(date);
            return this;
        },

        method: {
            'years': 'FullYear',
            'months': 'Month',
            'days': 'Date',
            'hours': 'Hours',
            'minutes': 'Minutes'
        },

        add: function (value, method) {
            // if (value < 0) {
            //     throw new Error('TypeError ' + value + ' < 0' );
            /*}else*/ if (method in this.method) {
                return this.setValue(value, this.method[method]);
            } else {
                throw new Error('TypeError' + method);;
            }
            console.log(this.newDate);
            // return this;
        },
        setValue: function(value, method) {
            console.log(this.newDate);
            this.newDate["setUTC" + method](value + this.newDate["getUTC" + method]());
            return this;
        },
        subtract: function(value, method) {
            console.log(this.newDate);
            return this.add(value, method);
        },
        toString: function() {
            console.log(this.newDate);
            return this.newDate.toLocaleString("ru",{timeZone : "UTC"})
        },
        value: function() {
            console.log(this.newDate);
            return this.newDate
        },
    }
    return objTime.init(date);
};