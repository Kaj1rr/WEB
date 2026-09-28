//1 задание. Проверка чисел

const number = 8;

    if (number > 0) {
        console.log("положительное");
    } else if (number < 0) {
        console.log("отрицательное");
    } else {
        console.log("ноль");
    }

    if (number % 2 === 0) {
        console.log("чётное");
    } else {
        console.log("нечётное");
    }



//2 задание. Работа с массивом
// const numbers = [3, 4, 66, 154, 43];

// let sum = 0;
// let max = numbers[0];
// let bigger_Than_10 = [];

// for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];

//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
//     if (numbers[i] > 10) {
//         bigger_Than_10.push(numbers[i]);
//     }
// }

// console.log("cумма:", sum);
// console.log("cамое большое число:", max);
// console.log("больше 10:", bigger_Than_10);

//3 задание.Список учеников
// const students = [
//     { name:"Марта", grade: 7 },
//     { name:"Женя", grade: 4 },
//     { name:"Дима", grade: 9 },
//     { name:"Олег", grade: 5 }
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

//4 задание. Угадай число
// function guessNumber() {
//     const randomNumber = Math.floor(Math.random() * 10) + 1;
//     const userNumber = Number(prompt("число от 1 до 10:"));

//     if (userNumber === randomNumber) {
//         console.log("вы угадали!");
//     } else if (userNumber < randomNumber) {
//         console.log("число больше");
//         console.log("загадано:", randomNumber);
//     } else {
//         console.log("число меньше");
//         console.log("загадано:", randomNumber);
//     }
// }
// guessNumber();

//чтобы убрать комменты нужно ctrl + k потом ctrl + u
