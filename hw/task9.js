// Напишите функцию applyDiscount(price, discountFunction), где discountFunction — это колбэк, вычисляющий скидку.

//     Проверьте, передав функции noDiscount (возвращает ту же цену) и halfPrice (уменьшает цену в 2 раза).


const noDiscount = (price) => {
    return price;
}

const halfPrice = (price) => {
    return price / 2;
}

const applyDiscount = (price, discountFunction) => {
    return discountFunction(price);
}

console.log(applyDiscount(100, noDiscount));
console.log(applyDiscount(100, halfPrice));