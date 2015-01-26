/**
 Celina Gool
 Jan. 25, 2015
 SDI Section 3
 Conditional Statements
 */

//Create a calculator for cone or cylinder volume

// Choose cone or cylinder volume
var coneOrCylinder=prompt("Calculate the volume of a cone or cylinder in cubic inches.  " +
"For cones, enter 1.  For cylinders, enter 2.  For the formula only, enter 3.");

//Is the variable an empty string?
if(coneOrCylinder==""){
    var coneOrCylinder=prompt("You forgot to enter something! For cones, enter 1.  For cylinders, enter 2.  " +
    "For the formula only, enter 3.");
}else{
    console.log("Continue through operations to final error message.");
}