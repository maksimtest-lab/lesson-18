// Создайте функцию calculate(a, b, operator), которая выполняет арифметические операции "+", "-", "*", "/", принимая их в качестве третьего параметра.

//     Используйте switch.

const calculate = (a, b, operator) => {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Некорректная операция";
    }
}

console.log(calculate(2, 3, "+"));
console.log(calculate(2, 3, "-"));
console.log(calculate(2, 3, "*"));
console.log(calculate(2, 3, "/"));
console.log(calculate(2, 3, "%"));
console.log(calculate(2, 3, "sdfg"));