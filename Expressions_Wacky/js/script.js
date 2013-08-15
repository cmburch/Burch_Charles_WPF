// JavaScript

//input message for alert()
var welcome = "Welcome to Burch’s Donuts ordering page. We take orders by the dozen.";
//input message for alert()
var priceDetails = "Each dozen of donuts cost $ 12.";
alert (welcome);
alert (priceDetails);
var pricePerDozen = 12;
var donutOrder = parseInt(prompt("How many fresh baked donuts would you like to enjoy? Enter in a whole number.We are only taking orders by the dozen.",5));
var total1 = pricePerDozen * donutOrder;
alert(" Your total is $ " + total1 );
alert ("Before you go please consider our 3 special offers.");
var crazyDeal =[2,3,4];
var deal1 = pricePerDozen * crazyDeal[0];
var deal2 = pricePerDozen * crazyDeal[1];
var deal3 = pricePerDozen * crazyDeal[2];
alert(" Would you like to try deal 1 2 dozen for $ " + deal1 + ",deal 2 3 dozen for $ " + deal2 + " ,or deal 3 4 dozen for $ " + deal3 + " Think carefully, each deal comes with a rattlesnake. Thank you for shopping.");