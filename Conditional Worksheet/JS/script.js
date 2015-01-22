/**
 Celina Gool
 Jan. 21, 2015
 SDI Section 3
 Conditional Worksheet
 */


//Create a degree converter for the temperature Fahrenheit and Celsius.
var method=prompt("For Celsius to Fahrenheit, enter 1; or enter any other number for Fahrenheit to Celsius.");

//Set the initial variables for degree Celsius and Fahrenheit.
if(method==1)
{

    var c = prompt("Enter Celsius Temperature");
    var fahrenheit1 = (c * 1.8 + 32);
    console.log("The temperature is "+fahrenheit1+" degrees Fahrenheit.");
}else{
    var f = prompt("Enter Fahrenheit Temperature");
    var celsius1 = (f-32)/1.8;
    console.log("The temperature is "+celsius1+" degrees Celsius.");
}


