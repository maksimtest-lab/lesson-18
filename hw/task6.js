// Создайте функцию findMax(arr), которая принимает строку из чисел и возвращает максимальное число.

//     Используйте for.

const findMax = (arr) => {
    let max = +arr[0];
    for (let i = 1; i < arr.length; i++) {
        let num = +arr[i];
        if (!isNaN(num) && num > max) {
            max = num;
        }
    }
    return max;
}

console.log(findMax("1 2 3 4 5 6 7 8 9 10"));
console.log(findMax("10 9 8 7 6 5 4 3 2 1"));
console.log(findMax("1d0g9h8r7h6j54x321"));
