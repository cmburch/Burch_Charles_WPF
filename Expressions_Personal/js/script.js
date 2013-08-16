// JavaScript
//alerts user brief description on page purpose 
alert("This page was designed to calculate gas mileage and calculate the total it takes to fill up your tank. ");
// ask user for input of miles driven
var milesDriven = parseFloat(prompt("How many miles can you drive, before a refill ? Enter in whole number." , 200));
// ask user for input of gallons of gas their car can hold
var gasConsumed = parseFloat(prompt("How many gallons of gas does your car hold full? Enter whole number." , 18));
//calculates price per gallon
var gasPricePerGallon = parseFloat(prompt("How much do you pay for a gallon of gas?.", 2.75));
//calculates the miles per gallon total
var mpgTotal = milesDriven / gasConsumed;
//calculates the gas price total
var gasTotalPrices = gasPricePerGallon * mpgTotal;
//alerts user brief description which gives total
alert("Your cars miles per gallon is " + mpgTotal + " gallons and your total price to fill your car is " + gasTotalPrices + "dollars" );

