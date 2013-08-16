// JavaScript
//alerts user brief description on page purpose 
alert("This page was designed to calculate gas mileage and calculate the total it takes to fill up your tank. ");
var milesDriven = parseFloat(prompt("How many miles can you drive, before a refill ? Enter in whole number." , 200));
var gasConsumed = parseFloat(prompt("How many gallons of gas does your car hold full? Enter whole number." , 18));
var mpgTotal = milesDriven / gasConsumed;
var gasTotalPrices = gasConsumed * mpgTotal;
alert("Your cars miles per gallon is " + mpgTotal + " gallons and your total price to fill your car is " + gasTotalPrices + " dollars per gallon. ");

