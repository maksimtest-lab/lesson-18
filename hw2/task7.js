// Напишите функцию delayedGreeting, которая принимает задержку (в миллисекундах) и колбэк-приветствие. Функция должна вызвать переданный колбэк с некоторым приветствием через указанную задержку.

const delayedGreeting = (delay, callback) => {
    setTimeout(callback, delay);
}

const sayHello = () => {
    console.log('Привет, мир!');
}

delayedGreeting(1000, sayHello);

console.log("Сообщение после задержки.")