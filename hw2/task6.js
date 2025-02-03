// Реализуйте функцию applyDiscount, которая принимает исходную цену товара и процент скидки, и возвращает цену товара после применения скидки.

const applyDiscount = (price, discount) => {
    return price - (price * discount / 100);
}

console.log(applyDiscount(100, 10));
console.log(applyDiscount(100, 20));
console.log(applyDiscount(100, 30));