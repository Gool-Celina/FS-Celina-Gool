/**
 Celina Gool
 Jan. 26, 2015
 SDI Section 3
 Function Videos
 */

//Functions - Variable Scope

var width=5;

function calcArea(){
    var width=20;
    var height=30;
    var area=width * height;
    console.log(area);
}

calcArea();
console.log(width)