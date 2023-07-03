let first = prompt("Напишите Ваше имя");
let last = prompt("Напишите Вашу фамилию");
let surname = prompt("Напишите Ваше отчество");
let old;
while (old == null || old != Number || old == NaN) {
    old = prompt("Сколько Вам лет?");
    if (!isNaN(+old) && old != null) {break;} //пустое поле пропускает
}
let result = confirm("Проверка Вашего пола: " + '\n' + "Men to the left because women are always right!" + '\n' + "Press OK, if you agree :)");
let retired;
let male;
if (old >= 55 && result === true) {
    (retired = "да"), (male = "женский");
}
if (old < 55 && result === true) {
    (retired = "нет"), (male = "женский");
}
if (old < 65 && result === false) {
    (retired = "нет"), (male = "мужской");
}
if (old >= 65 && result === false) {
    (retired = "да"), (male = "мужской");
}
alert("Ваше ФИО: " + last + " " + first + " " + surname + '\n' + "Ваш возраст в годах: " + old + '\n' + 
"Ваш возраст в днях: " + (old * 365) + '\n' + "Через пять лет вам будет: " + (+old + 5) + '\n' + "Ваш пол: " + male + '\n' + 
"Вы на пенсии: " + retired);