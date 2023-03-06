//add
function sum(num1, num2) {
    var total = num1 + num2;
    return total;
}
//deduct
function sub(num1, num2) {
    var result = num1 - num2;
    return result;
}
//multiply
function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
}
//divide
function divide(num1, num2) {
    var result = num1 / num2;
    return result;
}

var a = 10;
var b = 6;

var add = sum(a, b);
console.log('added', add);

var deduct = sub(a, b);
console.log('deduct', deduct);

var multi = multiply(a, b);
console.log('multiplication', multi);

var division = divide(a, b);
console.log('division', division);