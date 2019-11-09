/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var args = [].slice.call(arguments);
    var arrAction = arguments[0];
    // console.log(arguments[0]);

    for(var i = 1; i < args.length; i++) {
        // console.log(args[i].name);
        if (args[i].name === 'filterIn') {
            arrAction = args[i].action(arrAction);
            // console.log(arrAction);
        }
    }
    for(var i = 1; i < args.length; i++) {
        if(args[i].name === 'select') {
            // console.log(args[1]);
            arrAction = args[i].action(arrAction);
            // console.log(arrAction);
        }
    }
    return  arrAction;
}

/**
 * @params {String[]}
 */
function select() {
    var args = [].slice.call(arguments);
    // console.log(args);
    return {
        name: 'select',
        action: function (inputArr) {
            // console.log(inputArr);
            outArr = [];
            inputArr.forEach(function (objItem) {
                // console.log(objItem);
                var check = false;
                for(var i = 0; i < args.length; i++) {
                    // console.log(args[i]);
                    if (objItem.hasOwnProperty(args[i])) {
                        check = true;
                        // console.log(check);
                    }else {
                        check = false;
                    }
                    // console.log(check);
                    if (!check) {
                        delete args[i];
                    }
                }
                // console.log(args);
                    outObj = {};
                    args.forEach(function (argObj) {
                        // console.log(args);
                        // console.log(args);
                        // var check = false;

                        outObj[argObj] = objItem[argObj];

                    });
                    outArr.push(outObj);
            });
            // console.log(outArr);
            return outArr;
                // console.log(inputArr[3]);
        }
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    // console.log('2');
    var args = [].slice.call(arguments);
    // console.log(args);
    return {
        name: 'filterIn',
        action: function (inputArr) {
            outArr = [];
            // console.log(inputArr);
            inputArr.forEach(function (objItem) {
               // outObj = {};
               // console.log('1');
                for(var i = 0; i < args.length; i+= 2) {
                    // console.log(objItem);
                    var name = args[i];
                    var values = args[i + 1];
                    var check = false;
                    // console.log(values);
                    check = values.some(
                        function (value) { return value === objItem[name];
                    });
                    if(check){
                        outArr.push(objItem);
                        // console.log(objItem);
                    }else {
                        break;
                    }
                }
            });
            // console.log(outArr);
             return outArr;
        }
    }
}


module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
