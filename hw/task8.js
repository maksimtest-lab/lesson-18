// Создайте функцию generateRandomArray(size, min, max), которая возвращает строку из size случайных чисел в диапазоне от min до max.

const generateRandomArray = (size, min, max) => {
    let arr = [];
    for (let i = 0; i < size; i++) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        arr.push(num);
    }
    return arr.join(', ');
}

console.log(generateRandomArray(5, 1, 3));
console.log(generateRandomArray(10, 1, 100));
console.log(generateRandomArray(20, 1, 10));