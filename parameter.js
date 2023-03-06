//parameter pass in function
function show(num) {
    console.log(num);
}

//value passing whenever calling the function
show(10);

// double parameter pass

function add(num1, num2) {
    console.log(num1 + num2);
}

//call function
add(100, 200);


//parameter pass through variable
//variable from call method will convert into parameter automatically no matter what the name of parameter.
function add(num1, num2) {
    console.log(num1 + num2);
}

// variable declare
var first = 2;
var second = 3;

// variable pass through call function parameter
//these variable will convert into function parameter in function
add(first, second);