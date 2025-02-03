// Напишите функцию-генератор, которая будет генерировать все числа от 1 до N включительно, где N - число, переданное в качестве аргумента.

function* generateNumbers(n) {
    for (let i = 1; i <= n; i++) {
        yield i;
    }
}

const numbers = generateNumbers(5);

console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
