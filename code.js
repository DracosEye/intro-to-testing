// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if (typeof name !== "string") {
        return "Hello, World!";
    }
    return `Hello, ${name}!`;
}

function isFive(x) {
    if (x === 5) {
        return true;
    } else {
        return false;
    }
}

function isEven(num) {
    return typeof num != "boolean" && num % 2 == 0;
}

function isVowel(letter) {
    if (typeof letter == "string") {
        return letter.toUpperCase() === 'A';
    }
    return false;
}