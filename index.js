const stringLength = (str) => {
    if (str.length > 1 || str.length < 10) {
        let size = str.length;
        return size;
    } else {
        return 'String should be greater than 1 and less than 10';
    }
}
const reverseString = (str) => {
    let reversed = str.split("").reverse().join("");
    return reversed;
}

class Calculator {
    static add = (a,b) => {
        return a + b;
    }

    static subtract = (a,b) => {
        return a - b;
    }

    static divide = (a,b) => {
        return a / b;
    }

    static multiply = (a,b) => {
        return a * b;
    }
}

const capitalize = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

module.exports = {stringLength, reverseString, Calculator, capitalize }