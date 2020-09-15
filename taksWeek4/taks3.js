///// #algoritma ////////
/*
1. input bilangan interger
0 pemisah
*/
var num = 12307323202323;
var digits = num.toString().split(0);
var realDigits = digits.map(Number)
console.log(realDigits)
var explode = realDigits.split(", ");
console.log(explode);

// const i = 121310213102131
// const x = i.split(0)
// console.log(x)
