let name1 = prompt("Укажите Ваше имя");
let name2 = prompt("Укажите Вашу фамилию");
let Name = name1[0].toUpperCase() + name1.slice(1).toLowerCase() + 
" " + name2[0].toUpperCase() + name2.slice(1).toLowerCase(0) + "!";
alert("Привет, " + Name);