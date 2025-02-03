// Создайте функцию reverseString(str), которая принимает строку и возвращает ее в обратном порядке.

//     Используйте for.

const reverseString = (str) => {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(reverseString('hello'));