/**
 Celina Gool
 Jan. 29, 2015
 SDI Section 3
 Function  Circumference
 */


//Calculate circumference of a box or sphere

//Get user choice.
var cubeOrSphere=prompt("We are calculating the volume of a box or a sphere in cubic inches. " +
"For a box, enter 1. For a sphere, enter 2.");

//Declare and define given radius (variable)
var radius;

//Create a function to calculate sphere volume
function calcSphereVol(r){
    //V=4/3(pi)r^3
    //Calculate volume
    var sphereVol=4/3*Math.PI*r*r*r;
    //Return the volume
    return sphereVol;
}


var calcBoxVol = function(w, h, l){
//V=width*height*length
//Calculate volume
    var volume = w*h*l;
    return volume;
}

//Grabbing the returned value



//Chose the function
if(cubeOrSphere==1){
    var width=prompt("What is the width of the box?");
    var height=prompt("What is the height of the box?");
    var length=prompt("What is the length of the box?");
    var v=calcBoxVol(width, height, length);
    console.log(v);
    //Printing the volume
    console.log("The volume of the box is "+v+" cu. in.")
}else if(cubeOrSphere==2){
    var radius=prompt("What is the radius of the sphere?")
    calcSphereVol(radius);
//Grabbing the returned value
    var sphereVolume=calcSphereVol(radius);
//Printing the volume
    console.log("The volume of the sphere is "+sphereVolume+" cu. in.");

}else{
    alert("You have entered incorrect data. Please try again.");
    console.log("Start over.");
}