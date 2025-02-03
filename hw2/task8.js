// Реализуйте функцию debounce, которая принимает функцию в качестве аргумента и возвращает новую функцию, которая вызывает исходную функцию только после того, как прошло определенное время без вызовов.

const debounce = (func, delay) => {
    let timeout;
    return () => {
        timeout = setTimeout(func, delay);
    };
}

const sayHello = () => {
    console.log('Привет, мир!');
}

const debouncedSayHello = debounce(sayHello, 1000);

debouncedSayHello();
debouncedSayHello();
debouncedSayHello();
debouncedSayHello();
debouncedSayHello();