//1 Проверка чисел

// const number = 342;

//     if (number > 0) {
//         console.log("положительное");
//     } else if (number < 0) {
//         console.log("отрицательное");
//     } else {
//         console.log("ноль");
//     }
//     if (number % 2 === 0) {
//         console.log("чётное");
//     } else {
//         console.log("нечётное");
//     }


//2 Работа с массивом
// const numbers = [3, 4, 66, 154, 43, 155];

// let sum = 0;
// let max = numbers[0];
// let bigger_than_10 = [];

// for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];

//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
//     if (numbers[i] > 10) {
//         bigger_than_10.push(numbers[i]);
//     }
// }

// console.log("cумма:", sum);
// console.log("cамое большое число:", max);
// console.log("больше 10:", bigger_thanq_10);

//3 Список учеников
// const students = [
//     { name:"Марта", grade: 7 },
//     { name:"Женя", grade: 4 },
//     { name:"Дима", grade: 9 }
// ];

// const minGrade = 7;
// let sum = 0;
// console.log("оценкой выше", minGrade + ":");

// for (let i = 0; i < students.length; i++) {
//     sum = sum + students[i].grade;
//     if (students[i].grade > minGrade) {
//         console.log(students[i].name, "-", students[i].grade);
//     }
// }

// const average = sum / students.length;
// console.log("средняя оценка:", average);

//4 Угадай число
// function guessNumber() {  
//     const randomNumber = Math.floor(Math.random() * 10) + 1;
//     const userNumber = Number(prompt("1 до 10:"));

//     if (userNumber == randomNumber) {
//         console.log("угадал!");
//     } else if (userNumber < randomNumber) {
//         console.log("больше");
//         console.log("загадано:", randomNumber);
//     } else {
//         console.log("меньше");
//         console.log("загадано:", randomNumber);
//     }
// }
// guessNumber();

