'use strict';

function validateForm(params) {
    var form = document.getElementById(params.formId);
    var input = Array.from(form.querySelectorAll('input'));

    form.addEventListener('blur', function (event) {
        event.preventDefault();
        event.stopPropagation();
        valid(input);
    },true);

    form.addEventListener('focus', function (event) {
        event.target.classList.remove('input_error');
    }, true);

    form.addEventListener('submit', function (event) {
        var count = 0;
        valid(input);
        for(var i = 0; i < input.length; i++) {
            if (input[i].classList.contains('input_error')) {
                count++;
            }
        }
        if (count > 0) {
            form.classList.remove('form_valid');
            form.classList.add('form_invalid');
        }else if(count === 0) {
            form.classList.remove('form_invalid');
            form.classList.add('form_valid');
        }
        event.preventDefault();
    });
}

function valid(input) {
    for(var i = 0; i < input.length; i++) {
        if (input[i].dataset.hasOwnProperty('required') || input[i].dataset.validator === 'letters') {
            if ((input[i].value.length !== 0) && (input[i].value.match(/\d+/) === null) && ((input[i].value.match(/^[а-яё]*$/i) !== null) || (input[i].value.match(/[a-zA-Z]/) !== null))) {
                input[i].classList.remove('input_error');
            } else {
                input[i].classList.add('input_error');
            }

        } else if (input[i].dataset.validator === 'number') {
            if ((Number.isInteger(Number.parseInt(input[i].value, 10)) && ((Number.parseInt(input[i].value, 10) > input[i].dataset.validatorMin) && (Number.parseInt(input[i].value, 10) < input[i].dataset.validatorMax)) || input[i].value.length === 0)) {
                input[i].classList.remove('input_error');
            } else {
                input[i].classList.add('input_error');
            }
        } else if (input[i].dataset.validator === 'regexp') {
            if (input[i].value.match(input[i].dataset.validatorPattern) || input[i].value.length === 0) {
                input[i].classList.remove('input_error');
            } else {
                input[i].classList.add('input_error');
            }
        }
        if (input[i].dataset.validator === 'number' && input[i].name === 'number') {
            if ((input[i].value.match(/^\d+$/) !== null) || input[i].value.length === 0) {
                input[i].classList.remove('input_error');
            } else {
                input[i].classList.add('input_error');
            }
        }
    }
}


