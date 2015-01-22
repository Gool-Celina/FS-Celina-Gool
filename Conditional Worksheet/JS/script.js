/**
 Celina Gool
 Jan. 21, 2015
 SDI Section 3
 Conditional Worksheet
 */

//qualifying weight for heavyweight division is 250lbs or greater

var qualifyingWeight= 250;
var competitorWeight= prompt("What is your competitorWeight?");

//If the competitor weight is 250 or greater, they will get "You qualify for heavyweight division!" otherwise they will get, "You need to gain some weight!";
if(competitorWeight>=250) {
    console.log("You qualify for heavyweight division!");
} else {
    console.log("You need to gain some weight!");
}

(competitorWeight>=250)? console.log("You qualify for heavyweight!"): console.log("You need to gain some weight!");
