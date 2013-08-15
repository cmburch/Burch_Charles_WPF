// JavaScript


//alerts user brief description on page purpose 
alert(" This page was designed to help web developers make a good choice of comparing 2 computers price per gigabyte size.");
// ask user for input of computer 1 price
var priceComp = parseFloat(prompt("please enter the price of the first computer.", 600));
// ask user for input of computer 1 gigabyte size
var gigabyteSize = parseInt(prompt("please enter the gigabyte size of the first computer",50));
// ask user for input of computer 2 price
var priceComp2 = parseFloat(prompt("please enter the price of the second computer.",700));
// ask user for input of computer 2 gigabyte size
var gigabyteSize2 = parseInt(prompt("please enter the gigabyte size of the second computer " ,60));
//collects user input and divides computer1 price by the gigabyte 
var pricePerGigibyte1 = priceComp / gigabyteSize;
//collects user input and divides computer2 price by the gigabyte2
var pricePerGigibyte2 = priceComp2 / gigabyteSize2;
//inputs for calculating price per gigabytes for computer 1 and computer2
var gbVariety = new array(5,10,50);
// calculating price per gigabytes computer 1
var gigabytesz5 = PerGigibyte1 * gbVariety[0];
//calculating price per gigabytes computer 1
var gigabytesz10 = PerGigibyte1 * gbVariety[1];
//calculating price per gigabytes computer 1
var gigabytesz50 = PerGigibyte1 * gbVariety[2];
//calculating price per gigabytes computer2
var gigabytesz52 = PerGigibyte2 * gbVariety[0];
//calculating price per gigabytes computer2
var gigabytesz102 = PerGigibyte2 * gbVariety[1];
//calculating price per gigabytes computer2
var gigabytesz502 = PerGigibyte2 * gbVariety[2];
//displays total of price per gigabyte for computer 1 and computer 2
alert(" Below are the quick price references for 5,10,50 gigabytes ")

“Every 10 gigabytes the price is:” + “$” + gigabytesz10 + “</br>”