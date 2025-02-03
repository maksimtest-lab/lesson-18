// Создайте функцию-генератор, которая будет принимать число num и генерировать только нечётные числа из промежутка от 1 до num.

function* generateOddNumbers(num) {
    for (let i = 1; i <= num; i += 2) {
        yield i;
    }
}

let oddNumbers = generateOddNumbers(10);
console.log(oddNumbers.next().value); // 1
console.log(oddNumbers.next().value); // 3
console.log(oddNumbers.next().value); // 5
console.log(oddNumbers.next().value); // 7
console.log(oddNumbers.next().value); // 9
console.log(oddNumbers.next().value); // undefined