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
