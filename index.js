// let x = 10;
// let y = 20;

// console.log(x + y);
// console.log(x - y); // Output:  -10
// console.log(x * y); // Output: 200
// console.log(x / y); // Output: 0.5
// console.log(x % y); // Output: 10


// console.log(6 + 4);

// console.log (5 == '5');  // true (loose equality)
// console.log (5 === '5'); // false (strict equality)

// console.log (5 != 6);    // true


// logaical operators
//AND all conditions must be true
// let age = 25;
// let isStudent = true;

// console.log(age > 18 && isStudent); 


// //OR at least one condition must be true
// let hasID = true;
// let knowsPassword = false;

// console.log(hasID || knowsPassword);

// //NOT negates the condition
// let isAdmin = false;
// console.log(!isAdmin);


// Control Flow
// if Statement => runs the code if the condition is True

let age = 18;

if (age >= 18){
    console.log("you can vote");
}

// if and else Statement
// runs one block if true, another block is false

let isRaining = true;

if (isRaining){
    console.log("take an unbrella");
}else {
    console.log("no need to take an unbrella");
}

// else if Statement
// checks meltiple conditions

let score = 100;

if (score >= 90){
    console.log("Grade A");
}else if (score >= 80){
    console.log("Grade B");
}else if (score >= 70){
    console.log("Grade C");
}else{
    console.log("fail");
}

// Nested if statement
// putting one if statement
let age_2 = 17;
let hasID = false;

if (age_2 >= 18){
    if (hasID){
        console.log("you can enter the club");
    }else{
        console.log(" you need to have ID");
    }
}else {
    console.log("you are too young");
}

// logical operators

let isStudent = true;
let isMember = false;

if (isStudent || isMember){
    console.log("you get adiscount");
}
