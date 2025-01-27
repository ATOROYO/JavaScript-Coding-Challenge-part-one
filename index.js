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
const dolphins = (97 + 112 + 101) / 3;
const koalas = (109 + 95 + 106) / 3;
console.log(dolphins, koalas);

// If statement to compare the their average scores
if (dolphins >= 100 && dolphins > koalas) {
  console.log(`Dolpins are the winner 🏆`);
} else if (koalas >= 100 && koalas > dolphins) {
  console.log(`Koalas are the winners 🏆`);
} else if (dolphins >= 100 && dolphins === koalas) {
  console.log(`That is a draw`);
}

// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
const bill = 30;
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${tip + bill}`);
