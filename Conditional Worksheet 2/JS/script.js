/**
 Celina Gool
 Jan. 21, 2015
 SDI Section 3
 Conditional Worksheet 2
 */

//Creating a calculator for determining if user has enough gas to drive 200 miles.

//Create variables for gas mileage (mpg), prompt for fuel gauge reading variable, and create tank capacity variable.
var gasMileage=20;
var fuelGauge=prompt("Enter percentage (1-100) of gasoline in tank. (See fuel gauge reading.)");
var tankCapacity=20;

//Establish distance to travel (mi.).
var travelDistance=200;

//Determine how much gas is in the tank.
var gasQuantity=fuelGauge/100*tankCapacity;

//Determine how far the car can travel on its current amount of fuel in tank.
var travelCapacity=gasMileage*tankCapacity*fuelGauge/100;

if(travelCapacity>200){
    console.log("Yes, you can make it without stopping for gas!");
}else{
    console.log("You only have "+gasQuantity+" gallons of gas in your tank, better get gas now while you can.")
}
