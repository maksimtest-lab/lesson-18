const getUserString = () => {
    const userString = prompt("Введите строку: ");
    let newUserString = "";

    let capNext = true;

    for(let i = 0; i < userString.length; i++ ) {
        let char = userString[i];

        if (capNext && char != " ") {
            newUserString += char.toUpperCase();
            capNext = false;
        } else {
            newUserString += char;
        }

        if (char == " ") {
            capNext = true;
        }
    }

    return newUserString;

}

console.log(getUserString());