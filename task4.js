const getUserData = (message) => {
    return prompt(message);
}

const calcDiscount = (userStatus) => {
    switch (userStatus.toUpperCase()) {
        case 'VIP':
            return 0.5;
            break;
        case 'GOLD':
            return 0.25;
            break;
        case 'SILVER':
            return 0.1;
            break;
    }

    return 1;
}

const applyDiscount = (callBack, callBack2) => {
    const userPrice = +callBack("Введите стоимость: ");
    const userStatus = callBack("Введите статус пользователя: ");
    const userDiscount = callBack2(userStatus);

    return userPrice - userPrice * userDiscount;
}

console.log(applyDiscount(getUserData, calcDiscount));