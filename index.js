// function sayHello() {
//     console.log('Hello');
// }

// sayHello();

// let a = prompt('Введите число: ');

// function isEven(num) {

//     if (num % 2 === 0) {
//         console.log('Число четное');
//     } else {
//         console.log('Число нечетное');
//     }
// }

// isEven(a);
// isEven(prompt('Введите число: '));
// isEven(prompt('Введите число: '));


// let name = prompt('Как вас зовут?');
// let age = prompt('Сколько вам лет?');
// let city = prompt('В каком городе вы живете?');

// function renderUserInformation(userName, userAge, userCity) {
//     console.log(`Привет, меня зовут ${userName}. Мне ${userAge} лет, и я живу в городе ${userCity}.`);
// }

// renderUserInformation(name, age, city);

// let name = prompt('Как вас зовут?');
// let age = prompt('Сколько вам лет?');
// let city = prompt('В каком городе вы живете?');

// function getUserInformation(userName, userAge, userCity) {
//     const result = `Привет, меня зовут ${userName}. Мне ${userAge} лет, и я живу в городе ${userCity}.`;

//     return result;
// }

// const userInfo = getUserInformation(name, age, city);
// console.log(userInfo);


// let num1 = +prompt('Введите первое число:');
// let num2 = +prompt('Введите второе число:');

// function sum(fisrtNumber, secondNumber) {
//     return fisrtNumber + secondNumber;
// }

// const result = sum(num1, num2);

// console.log(result);
// console.log(sum(111, 333));

let a = 5;
let b = 7;

// Function declaration
function sum() {
    console.log(this, this);
    let a = 15;
    let b = 73;
    return a + b;
    throw new Error('Error');
}
sum.a = 10;
sum.b = 22;

console.log(sum);
console.log(sum());
console.log(a, b);

// Function expression
const sayIt = function () {
    console.log('Hello');
}
console.log(sayIt());

// console.log(aaaa)

let aaaa = 8;

const sayIt2 = (name) => {
    console.log(`Hello ${name}`);
    throw new Error('Error');
}
console.log(sum());
console.log(sayIt());
console.log(sayIt2('Igor'));