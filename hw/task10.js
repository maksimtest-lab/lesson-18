// Напишите функцию countVowels(str), которая считает количество гласных (a, e, i, o, u) в строке.

//     Используйте for и if.

const countVowels = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u') {
            count++;
        }
    }
    return count;
}

console.log(countVowels('hello world'));
console.log(countVowels('javascript is awesome'));