const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0;
}
const isValid = function (value) {
    if (typeof value === 'undefined') return false;
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}

const isValidName = function (abc) {
    if (typeof abc === 'undefined') return false;
    if (typeof abc != 'string' && abc.trim().length === 0) return false
    const regex = /^[a-z/\s/A-Z]{3,100}$/;
    return regex.test(String(abc));
}

const isValidNumber = function (num) {
    const reg = /^[0-9]{10}$/;
    return reg.test(String(num));
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email));
}

module.exports = { isValid, isValidEmail, isValidRequestBody, isValidName, isValidNumber }
