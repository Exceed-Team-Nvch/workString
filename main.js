console.log("------ПЕРВАЯ ЗАДАЧА--------");

let str = "Я изучаю JavaScript";

console.log("Выводим первый символ через 'charAt': " + str.charAt(0)); ///выводим первый символ
console.log("Выводим третий символ через str[2]: " + str[2]);///выводим третий символ
console.log("Выводим последний символ с помощью (str.length-1) : " + str[str.length-1]);

console.log("------КОНЕЦ ПЕРВОЙ ЗАДАЧИ--------");

console.log("------ВТОРАЯ ЗАДАЧА--------");

str = "Я изучаю JavaScript";

console.log("С помощью str.replace , меняем ю на я: " + str.replace("ю","я"));// может использовать флаг g  чтобы поменять все символы
console.log("Так же меняем Javascript  на  Frontend: " + str.replace("JavaScript","Frontend"));

console.log("------КОНЕЦ ВТОРОЙ ЗАДАЧИ--------");
