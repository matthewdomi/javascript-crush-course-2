let num1 = 10
let num2 = 20
//LOGICAL OPERATORS
let num3 = "10"
let word1 = "Hello";
let word2 = "hello";

console.log(num1 < num2); //less than
console.log(num1 > num2); //greater than
console.log(num1 <= num2); //less than or equal to
console.log(num1 >= num2); //greater than or equal to 
console.log(!true); //not true
console.log(!false); //not false.  ! means not
console.log(num1 == num3);
console.log(num1 === num3); // equality check
console.log(word1 === word2); 
console.log(word1 != word2);  //not equal to 

//CONTROL FLOW
let item = "U2";
if (item === "Annapurna") {
    console.log("Buy Annapurna");
} else if (item === "U2"){
    console.log("Buy U2");
} else{
    console.log("Buy Rocky Salt");
}

//example for Grading system
let score = 90;
if (score >=90 && score <=100) {
if (score >=90) {
    console.log("Excellent");
} else if(score >=80){
    console.log("Very Good");
} else if(score >=70){
    console.log("Good");
} else if(score >=60){
    console.log("Average");
} else if(score >=50){
    console.log("Credit");
} else if(score >=40){
    console.log("Pass");
} else if(score >=0){
    console.log("Fail");
}
} else {
    console.log("Please enter a valid score")
}


//FUNCTION is a group of code used to perform one specific task
//Addition
function sum(x, y) {
    let total = x + y;
    return total;
    // console.log(x + y);
}

let eleven = sum(3, 5);
let fifteen = sum(3, 25);
let nineteen = sum(3, 34);

//Multiplication
function multiply(x, y = 1) {
 
    let total = x * y;
    return total;
}
let Food = multiply(3);
console.log(Food);


//LOOPS is a way of making a computer work over and over again untill it finds a condition fo r it to stop.
for (let i = 1; i <=10; i++){
console.log(i + ".I will not talk in class again");
}

//WHILE LOOP
let num = 1;
while(num <=10){
    console.log(num);

    num = num + 1;
}

//Do...WHILE LOOP
let age = 18;
do{
    console.log("You can't vote");
    age = age + 1;
} while (age < 18);


//ARRAY METHODS
let ages = [19,34,65,13,24,35,46,57,68,79,10];

for(let age of ages){
    console.log(age);
}

let Lenghts = [19,34,65,13,24,35,46,57,68,79,10];

for(let Lenght of Lenghts){
    console.log(Math.pow(Lenght, 2));
}

//Filter
let marriage = ages.filter(function (num)  {
    return num > 25;
});
console.log(marriage);


//MAP
let squares = age.map((ages) => ages*ages);
console.log(squares);

//FIND 
let sizes = [19,34,65,13,24,35,46,57,68,79,10];
let eighteen = sizes.find((size)=> size === 10) ;
console.log(eighteen);

