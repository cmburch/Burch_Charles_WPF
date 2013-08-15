// JavaScript

//input message for alert()
var welcome = "Welcome to Burch’s Donuts ordering page. We take orders by the dozen.";
//input message for alert()
var priceDetails = "Each dozen of donuts cost $ 12.";
//alerts user brief description on page purpose 
alert (welcome);
//alerts user brief description on price of donuts
alert (priceDetails);
// assign the price of the donut use in var total
var pricePerDozen = 12;
// ask user for input of order size
var donutOrder = parseInt(prompt("How many fresh baked donuts would you like to enjoy? Enter in a whole number.We are only taking orders by the dozen.",5));
//calculates the price of the donuts
var total1 = pricePerDozen * donutOrder;
// display the price of the donuts
alert(" Your total is $ " + total1 );
// display brief message of deals
alert ("Before you go please consider our 3 special offers.");
//values used in calculating deal price
var crazyDeal =[2,3,4];
// calculates deal price 1
var deal1 = pricePerDozen * crazyDeal[0];
// calculates deal price 2
var deal2 = pricePerDozen * crazyDeal[1];
// calculates deal price 3
var deal3 = pricePerDozen * crazyDeal[2];
alert(" Would you like to try deal 1 2 dozen for $ " + deal1 + ",deal 2 3 dozen for $ " + deal2 + " ,or deal 3 4 dozen for $ " + deal3 + " Think carefully, each deal comes with a rattlesnake. Thank you for shopping.");