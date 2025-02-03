// Создайте игру "Угадай число".

//     Функция guessNumberGame() загадывает случайное число от 1 до 100 и предлагает пользователю угадывать его, давая подсказки "Больше" / "Меньше", пока число не будет угадано.
//     Используйте while.


const guessNumberGame = () => {
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let userGuess;
    let attempts = 0;

    while (userGuess !== secretNumber) {
        userGuess = +prompt("Угадайте число от 1 до 100:");
        console.log(`Попытка № ${attempts + 1}: ${userGuess}`);
        attempts++;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            console.log("Некорректный ввод. Пожалуйста, введите число от 1 до 100.");
        } else if (userGuess < secretNumber) {
            console.log("Больше!");
        } else if (userGuess > secretNumber) {
            console.log("Меньше!");
        } else {
            console.log(`Поздравляем! Вы угадали число ${secretNumber} за ${attempts} попыток.`);
        }
    }
}

guessNumberGame();