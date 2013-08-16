// JavaScript

//Dog Years
//sets the value of sparky's human years
var humanYears = 3;
//calculates the humans years and turn into dog years
var dogYears = humanYears * 7;
//display message to user sparky human and dog years
alert("sparky is " + humanYears + " human years old which is " + dogYears + " in dog years.");


//Slice of Pie part 1
var people=20;
var slices=10;
var  pizzas=10;
var slicesTotal=slices * pizzas;
var slicesEach = slicesTotal / people;
console.log("Each person ate " + slicesEach +  "slices of pizza at the party.");

//Slice of Pie part 2
var people=20;
var slices=10;
var  pizzas=10;
var slicesTotal=slices * pizzas;
var extraSlices=slicesTotal %  people;
console.log("Sparky got" + extraSlices + "slices of pizza");

//Average shopping bill
var bills = [20,25,26,30,50];
var billTotal = bills[0] + bills[1] + bills[2] + bills[3] + bills[4] ;
var billsAverage = billTotal / 4;
console.log(“billsAverage”);