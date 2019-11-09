/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    // console.log(date);
    var objTime = {
        _value: null,
        get value() {
            // console.log(this._value);
          return this+'';
        },
        init: function (date) {
            if(date instanceof Date) {
                this._value = date;
                // console.log(this._value);
            }else {
                var arr = date.split(/[\s:-]/);
                this._value = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4]);
                // console.log(this._value);
            }
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
            if (value > 0 && method in this.method) {
                return this.setValue(value, this.method[method]);
            } else {
                throw new TypeError('TypeError');
            }
        },
        setValue: function (value, method) {
            // console.log(this);
            this._value['set' + method](value + this._value['get' + method]());
            // console.log(this._value);
            return this;
        },

        setValueSubtract: function (value, method) {
            this._value['setUTC' + method](-value + this._value['getUTC' + method]());
            // console.log(date);
            return this;
        },
        subtract: function (value, method) {
            if (value > 0 && method in this.method) {
                return this.setValueSubtract(value, this.method[method]);
            } else {
                throw new TypeError('TypeError');
            }
        },
        valueOf: function () {
            var year = this._value.getFullYear();
            var month = this._value.toLocaleString('ru',{timeZone : 'UTC', month: '2-digit'});
            var day = this._value.toLocaleString('ru',{timeZone : 'UTC', day: '2-digit'});
            var time = this._value.toLocaleString("ru",{ hour: '2-digit', minute: '2-digit' });
            // console.log(time);
            var dates = year + '-' + month + '-' + day + ' ' + time;

            return dates;

            },
        toString: function () {
            // console.log(date);
            return this.valueOf;
        }
    };
    // console.log(date);
    return objTime.init(date);
};
