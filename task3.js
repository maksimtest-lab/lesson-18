const getWeekDay = () => {
    weekDay = +prompt("Введите день недели: ");

    return weekDay;
}


const getWeekNameByNum = () => {
    switch (day) {

        case 1:
            return "Пн.";
            break;
        case 2:
            return "Вт.";
            break;
        case 3:
            return "Ср.";
            break;
        case 4:
            return "Чт.";
            break;
        case 5:
            return "Пт.";
            break;
        case 6:
            return "Суб.";
            break;
        case 7:
            return "Вс.";
            break;
        default:
            return "Вы не выбрали цифру от 1 до 7";
            break;
    }
}

const userNum = getWeekDay();
const userWeekName = getWeekNameByNum(userNum)

console.log(userWeekName);