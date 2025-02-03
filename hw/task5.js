// Создайте функцию isPalindrome(str), которая проверяет, является ли строка палиндромом (читается одинаково слева направо и справа налево).

//     Используйте if..else внутри цикла.

const reverseString = (str) => {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

const isPalindrome = (str) => {
    let reversedStr = reverseString(str);

    return reversedStr === str;
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('ollo'));