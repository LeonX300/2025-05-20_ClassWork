// -----2025-05-20-----
// ------- Loops ------

//Task 1. IF Statement
// let val = prompt('Введите число');
// let condition = val % 2 === 0;

// if (condition) {
//     alert('Число четное');
//  } else alert("Нечетное");

// // Task 2. FOR loop basics
// for (let i = 0; i <= 10; i++) {
//     console.log("Итерация", i);
// }


//2025-05-20 ClassWork
// Task 9. Task 12









// let num = prompt("Number");

// let counter = 1;

// for (let i = 2; i <= num; i++) {
//     counter /= i;
// }

// console.log(counter);






// let A = [1, 3, 5];
// console.log(A.length)



// Arrays. Task 9
let arrA = [2, 7, 1, 8, 0, 11, 1, 7, 11, 7];
let arrB = [11, 7, 1];

console.log(arrA);
console.log(arrB);

for (let i = 0; i < arrB.length; i++) {
    for (let j = 0; j < arrA.length; j++) {
        if (arrB[i] == arrA[j]) arrA[j] = 0;
    }
}

console.log(arrA);
