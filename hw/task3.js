// Напишите функцию factorial(n), которая возвращает факториал числа n.

//     Реализуйте с while.

const factorial = (n) => {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--;
    }
    return result;
}

console.log(factorial(5));
console.log(factorial(10));