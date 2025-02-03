// Создайте функцию countOccurrences(srt, target), которая считает количество вхождений target в строку str.

const countOccurrences = (str, target) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === target) {
            count++;
        }
    }
    return count;
}

console.log(countOccurrences('hello world', 'l'));
console.log(countOccurrences('javascript is awesome', 'a'));
console.log(countOccurrences('javascript is awesome', 'e'));