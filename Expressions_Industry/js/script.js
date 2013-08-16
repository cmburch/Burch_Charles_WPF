// JavaScript


//alerts user brief description on page purpose 
alert(" This page was designed to help web developers make a good choice of comparing 2 computers price per gigabyte size.");
// ask user for input of computer 1 price
var priceComp = parseFloat(prompt("please enter the price of the first computer.", 600));
// ask user for input of computer 1 gigabyte size
var gigabyteSize = parseFloat(prompt("please enter the gigabyte size of the first computer" ,50));
// ask user for input of computer 2 price
var priceComp2 = parseFloat(prompt("please enter the price of the second computer." ,700));
// ask user for input of computer 2 gigabyte size
var gigabyteSize2 = parseFloat(prompt("please enter the gigabyte size of the second computer " ,60));
//collects user input and divides computer1 price by the gigabyte 
var pricePerGigibyte1 = priceComp / gigabyteSize;
//collects user input and divides computer2 price by the gigabyte2
var pricePerGigibyte2 = priceComp2 / gigabyteSize2;
//inputs for calculating price per gigabytes for computer 1 and computer2
var gbVariety = [5,10,50];
// calculating price per gigabytes computer 1
var gigabytesz5 = pricePerGigibyte1 * gbVariety[0];
//calculating price per gigabytes computer 1
var gigabytesz10 = pricePerGigibyte1 * gbVariety[1];
//calculating price per gigabytes computer 1
var gigabytesz50 = pricePerGigibyte1 * gbVariety[2];
//calculating price per gigabytes computer2
var gigabytesz52 = pricePerGigibyte2 * gbVariety[0];
//calculating price per gigabytes computer2
var gigabytesz102 = pricePerGigibyte2 * gbVariety[1];
//calculating price per gigabytes computer2
var gigabytesz502 = pricePerGigibyte2 * gbVariety[2];
//displays total of price per gigabyte for computer 1 and computer 2
alert("Below are the quick price references for 5,10,50 gigabytes " + "\n" +

"Computer 1" + "\n" +
"Every 5 gigabytes the price is:" + "$" + gigabytesz5 +  "\n" +
"Every 10 gigabytes the price is:" + "$" + gigabytesz10 + "\n" +
"Every 50gigabytes the price is:" + "$" + gigabytesz50 + "\n" +
"Computer 2" + "\n"+
"Every 5 gigabytes the price is:" + "$" + gigabytesz52 + "\n" +
"Every 10 gigabytes the price is:" + "$" + gigabytesz102 + "\n" +
"Every 50gigabytes the price is:" + "$" + gigabytesz502 + "\n" +
"Choose the deal that best fits you.");