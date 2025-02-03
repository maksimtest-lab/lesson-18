// Напишите функцию fizzBuzz(n), которая выводит числа от 1 до n, но вместо чисел, кратных 3, выводит "Fizz", вместо чисел, кратных 5 — "Buzz", а вместо чисел, кратных 3 и 5 — "FizzBuzz".

// Используйте for и if..else.

const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(152);

