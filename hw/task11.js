// Создайте функцию getDayName(dayNumber), которая принимает число от 1 до 7 и возвращает название дня недели.

//     Используйте switch.

const getDayName = (dayNumber) => {
    switch (Number(dayNumber)) {
        case 1:
            return 'Понедельник';
        case 2:
            return 'Вторник';
        case 3:
            return 'Среда';
        case 4:
            return 'Четверг';
        case 5:
            return 'Пятница';
        case 6:
            return 'Суббота';
        case 7:
            return 'Воскресенье';
        default:
            return 'Неверное число';
    }
}

console.log(`Ожидаем понедельник: получаем getDayName(1) = ${getDayName(1)}`);
console.log(`Ожидаем вторник: получаем getDayName(2) = ${getDayName(2)}`);
console.log(`Ожидаем среда: получаем getDayName(3) = ${getDayName(3)}`);
console.log(`Ожидаем четверг: получаем getDayName(4) = ${getDayName(4)}`);
console.log(`Ожидаем пятница: получаем getDayName(5) = ${getDayName(5)}`);
console.log(`Ожидаем суббота: получаем getDayName(6) = ${getDayName(6)}`);
console.log(`Ожидаем воскресенье: получаем getDayName(7) = ${getDayName(7)}`);
console.log(`Ожидаем неверное число: получаем getDayName(8) = ${getDayName(8)}`);
console.log(`Ожидаем понедельник (преобразование строки): получаем getDayName('1') = ${getDayName('1')}`);
console.log(`Ожидаем неверное число: получаем getDayName('sdsdfgd') = ${getDayName('sdsdfgd')}`);
console.log(`Ожидаем неверное число: получаем getDayName('3sdsdfgd') = ${getDayName('3sdsdfgd')}`);
