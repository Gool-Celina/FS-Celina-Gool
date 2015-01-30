/**
 Celina Gool
 Jan. 29, 2015
 SDI Section 3
 Functions Worksheet Killer Bees
 */

//Establish given variables
//Establish killer bee stings per pound
var killerStingsLb=8.666666667

//Establish victim weight
var victimWeightLb=265

//Create function to calculate number of bee stings required to kill a sting victim
function calcStingsToKill(victimWeightLb){
    //Calculation
    var killerBeeStings=victimWeightLb/killerStingsLb;
    //Return value
    return killerBeeStings;
}
