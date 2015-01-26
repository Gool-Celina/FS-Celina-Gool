/**
 Celina Gool
 Jan. 21, 2015
 SDI Section 3
 Conditional Worksheet 3
 */


//Create a converter for taking a number grade and printing the equivalent letter grade.

var numberGrade=prompt("Enter your grade in percentage.");

if(numberGrade<=69){
    console.log("You have a "+numberGrade+"%, which means you have earned an F in the class!");
    alert("You have a "+numberGrade+"%, which means you have earned an F in the class!");
}else if(numberGrade<=72){
    console.log("You have a "+numberGrade+"%, which means you have earned a D in the class!");
    alert("You have a "+numberGrade+"%, which means you have earned a D in the class!");
}else if(numberGrade<=75){
    console.log("You have a "+numberGrade+"%, which means you have earned a C in the class!");
    alert("You have a "+numberGrade+"%, which means you have earned a C in the class!");
}else if(numberGrade<=79){
    console.log("You have a "+numberGrade+"%, which means you have earned a C+ in the class!");
    alert("You have a "+numberGrade+"%, which means you have earned a C+ in the class!");
}else if(numberGrade<=84){
    console.log("You have a "+numberGrade+"%, which means you have earned a B in the class!");
    alert("You have a "+numberGrade+"%, which means you have earned a B in the class!");
}else if(numberGrade<=89){
    console.log("You have a "+numberGrade+"%, which means you have earned a B+ in the class!");
    alert("You have a "+numberGrade+"%, which means you have earned a B+ in the class!");
}else if(numberGrade<=94){
    console.log("You have a "+numberGrade+"%, which means you have earned an A in the class!");
    alert("You have a "+numberGrade+"%, which means you have earned an A in the class!");
}else if(numberGrade<=100){
    console.log("You have a "+numberGrade+"%, which means you have earned an A+ in the class!");
    alert("You have a "+numberGrade+"%, which means you have earned an A+ in the class!");
}




