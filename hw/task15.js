// Напишите функцию generatePassword(length), которая генерирует случайный пароль из букв и цифр заданной длины.

const generatePassword = (length) => {
    let password = '';

    let passwordSymbols = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^';

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * passwordSymbols.length);
        password += passwordSymbols[randomIndex];
    }

    return password;
}

console.log(generatePassword(8));
console.log(generatePassword(12));
console.log(generatePassword(16));