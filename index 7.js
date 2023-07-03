let number = +prompt("Введите число");
console.log(`Вы ввели число ${number}.`);
console.log(`Таблица умножения для числа ${number}:`);
for (let i = 0; i<= 10; i++) {
    let result = number * i;
    console.log(`${number} * ${i} = ${result}`);
}