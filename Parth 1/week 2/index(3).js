// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */

module.exports = function (command) {
    var commands = command.split(' ');
    var commandName = commands[0];

    // console.log(commandName);
    if (commandName === 'ADD') {
        return add(command);
    }
    // console.log(commandName);
    if (commandName === 'REMOVE_PHONE') {
        // console.log('123');
        return rmv(command);
    }
    // console.log(commandName);
    if (commandName === 'SHOW') {
        return show();
    }

    // console.log('123');

    function add() {
        var name = commands[1];
        var num = commands[2].split(',');
        // console.log(num);
        if (phoneBook.hasOwnProperty(name)) {
            var arrayPhones = phoneBook[name].split(', ');
            // console.log(arrayPhones);
            var addPhone = arrayPhones.concat(num);
            // console.log(addPhone);
            phoneBook[name] = addPhone.join(', ');
            // console.log(phoneBook[name]);
            return;
        }
        phoneBook[name] = num.join(', ');
        // console.log(phoneBook[name]);
    }

    function show() {
        var mas = [];
        var i = 0;
        for (var key in phoneBook) {
            mas[i] = key + ': ' + phoneBook[key];
            i++;
        }

        return mas.sort();
    }

    function rmv() {
        var rmvPhone = commands[1];
        var book = {};
        var i = 0;
        var one;
        // console.log('123');
        for (var value in phoneBook) {
            book[value] = phoneBook[value];
            i++;
        }
        // console.log(phoneBook);
        // console.log(book);
        for (var phone in phoneBook) {
            // console.log(phoneBook[phone]);
            if (phoneBook[phone] === rmvPhone) {
                delete phoneBook[phone];
            } else if (phoneBook[phone].split(', ').indexOf(rmvPhone) != -1) {
                var arrayPhones = phoneBook[phone].split(', ');
                for (var i = 0; i < arrayPhones.length; i++) {
                    if (arrayPhones[i] === rmvPhone) {
                        arrayPhones.splice(i, 1);
                    }
                }
                phoneBook[phone] = arrayPhones.join(', ');
            }
        }
        // console.log(phoneBook);
        return JSON.stringify(book) === JSON.stringify(phoneBook) ? false : true;
    }
};


