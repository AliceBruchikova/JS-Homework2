let start = +prompt("Введите начальное число");
let end = +prompt("Введите конечное число");
let result = start;
while (result >= start && result <= end) {
console.log("Результат: " + result);
result++;
}