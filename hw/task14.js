// Создайте функцию capitalizeWords(str), которая делает заглавной первую букву каждого слова в строке.

const capitalizeWords = (str) => {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    let capitalizedWords = words;

    return capitalizedWords.join(' ');
}

console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("javascript is awesome"));