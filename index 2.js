let side = prompt("В какую сторону света Вы бы хотели отправиться?");
switch(side) {
    case 'юг':
        alert("на юг пойдешь счастье найдешь");
        break;
    case 'север':
        alert("на север пойдешь много денег найдешь");
        break;
    case 'запад':
        alert("на запад пойдешь верного друга найдешь");
        break;
    case 'восток':
        alert("на восток пойдешь разработчиком станешь");
        break;
    default: 
        console.log("Попробуйте еще раз.")
}