/**
 Celina Gool
 Jan. 21, 2015
 SDI Section 3
 Conditional Worksheet 4
 */

//alert("test");
//assign variables for correct username and password


var correctU= "admin";
var correctP= "fullsail";

//prompt user for username; and prompt for password, if username is correct

var usernameInput= prompt("Username?");

if(usernameInput==correctU){
 var passwordInput=prompt("Password?");
 if(passwordInput==correctP){
  alert("Welcome," +usernameInput+"!");
  console.log("Welcome," +usernameInput+"!");
 }
}else{
 alert("User not found. Try again.");
 console.log("User not found. Try again");
};


