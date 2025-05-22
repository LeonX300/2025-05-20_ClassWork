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


//2025-05-22 ClassWork

// Arrays. Task 1 (maxElement)
// let Arr = [3, 1, 102, 50, 35, 8, 7, 12, 65, 5, 10];

// console.warn(Arr);

// let maxElem = Arr[0];

// for (let i = 1; i < Arr.length; i++) {
//     if (Arr[i] > maxElem) {
//         maxElem = Arr[i];
//     } 
// }

// console.warn(maxElem);
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



// Arrays. Task 9
// let arrA = [2, 7, 1, 8, 0, 11, 1, 7, 11, 7];
// let arrB = [11, 7, 1];

// console.log(arrA);
// console.log(arrB);

// for (let i = 0; i < arrB.length; i++) {
//     for (let j = 0; j < arrA.length; j++) {
//         if (arrB[i] == arrA[j]) arrA[j] = 0;
//     }
// }

// console.log(arrA);
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



// Arrays. Task 10 (sort)
// let Arr = [3, 1, 102, 50, 35, 8, 7, 12, 65, 5, 10];

// console.warn(Arr);
// Arr.sort((a, b) => a - b);
// console.warn(Arr);
// Arr.reverse();
// console.warn(Arr);
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



// Arrays. Task 11 (splice)
// let arrA = [2, 7, 1, 8, 0, 11, 1, 7, 11, 7];
// let arrB = [11, 7, 1];

// console.log(arrA);
// console.log(arrB);

// let pos = prompt("Position is required");
// // arrA.splice(pos, 0, arrB);
// arrA.splice(pos, 0, ...arrB);

// console.log(arrA);
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



// Arrays. Task 12 (splice)
// let arrA = [2, 7, 1, 8, 0, 11, 1, 7, 11, 7];
// const numK = prompt("Start");
// const numL = prompt("End");

// console.log(arrA);

// arrA.splice(numK, numL);

// console.log(arrA);
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// Task. Concat
// let arrA = [2, 7, 1, 8, 0, 11, 1, 7, 11, 7];
// let result = [];

// console.log(result.concat(arrA, [0, 0, 1, 1, 101]));
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



// Task. Homework 2025-05-20
// document.addEventListener('DOMContentLoaded', () => {

//     let num = null;

//     calculateSeriesSum = num => {

//         let currentElem = 1;
//         let result = 0;
//         let series = "1 - ";
        
//         for (let i = 2; i <= num; i++) {
//             if (i % 2 == 0) {
//                 if (i !== num) {
//                     series += `1 / ${i}  + `
//                 } else series += `1 / ${i}`;
        
//                 result += currentElem / (i * -1);
        
//             } else {  
//                 if (i != num) {
//                     series += `1 / ${i} - `;
//                 } else {
//                     series += `1 / ${i}`
//                 };
                
//                 result += currentElem / i;     
//             }
//         }
        
//         series += ` ≈ ${result.toFixed(4)}`;
//         return series;
//     };
    
//     let mouseClickHandler = () => {
//         if (!Number.isFinite(num)) {
//             document.querySelector('.series').textContent = 'Incorrect input data!';
//         } else if (num < 1) {
//             document.querySelector('.series').textContent = 'Incorrect input data!';
//         } else if (num == 1) {
//             document.querySelector('.series').textContent = 'Need more than one element. Result is 1!';
//         } else {
//             document.querySelector('.series').textContent = (calculateSeriesSum(num));
//         }
        
//     };

//     document.querySelector('.series-elements-number-button').addEventListener('click', () => {
//         num = Number(document.querySelector('.series-elements-number-input').value);
//         mouseClickHandler(num);
//     }, false);

// }, false)
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
























//document.write("1 - ");

//document.querySelector('.series').textContent = "1 - ";

//for (let i = 2; i <= N; i++) {



//     if (i % 2 == 0) {
//         if (i !== N) {document.write("1 / ", i, " + ")} else document.write("1 / ", i);
//         result += currentElem / (i * -1);  
//     } else {
        
//         if (i != N) {
//             document.write("1 / ", i, " - ")
//         } else {document.write("1 / ", i)}
        
//         result += currentElem / i;     
//     }
// }




//document.write(" ≈ ", result.toFixed(4));


//document.querySelector('.series').textContent = ` ≈ ${result.toFixed(4)}`;