// Создайте функцию isPrime(n), которая проверяет, является ли число простым.

const isPrime = (n) => {
    if (n == 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(11));
console.log(isPrime(13));
console.log(isPrime(15));
console.log(isPrime(17));
console.log(isPrime(19));
console.log(isPrime(21));
console.log(isPrime(23));
console.log(isPrime(25));