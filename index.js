'use strict';
// JavaScript Fundamentals – Part 1
// Coding Challenge #1
const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

// Calculating their BMIs
const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);

// Comparing their BMIs
// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);
if (markBMI > johnBMI) {
  console.log(`Mark's
BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
  console.log(`John's
        BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
const dolphins = (96 + 108 + 89) / 3;
const koalas = (88 + 91 + 110) / 3;
console.log(dolphins, koalas);

// If statement to compare the their average scores
if (dolphins >= 100 && dolphins > koalas) {
  console.log(`Dolpins are the winner`);
} else if (koalas >= 100 && koalas > dolphins) {
  console.log(`Koalas arethe winners`);
} else if (dolphins >= 100 && dolphins === koalas) {
  console.log(`That is a draw`);
}
