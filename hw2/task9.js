// Реализуйте функцию filter, которая принимает массив чисел и колбэк-условие, возвращая новый массив, содержащий только те числа, для которых переданное условие истинно.

const filter = (arr, callback) => {
    const filteredArr = [];
    console.log(callback);
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

const isEven = (num) => {
    return num % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filter(numbers, isEven);
console.log(evenNumbers);