/*
Assign the variables repeatDaniel, repeatMark, and repeatBeyonce to values
by calling the repeatName(name) function so that the console.logs will
print out the expected values below.
*/

//My function needs a name and, in this case, a parameter.
function repeatName(name) {
  return name + " " + name; //Once this function is invoked, it should
  // return the argument as a concatenated string of the argument repeated
  //with a space in between. 
} 

//I then assign my functions to the variables below so that by simply console  
//logging the variables, I will get the desired output.
let repeatDaniel = repeatName(); //why is it not repeatName(name)?
let repeatMark = repeatName();  //why did I get three green checks without 
let repeatBeyonce = repeatName(); //assigning the functions to the variables?

//Questions to ask : when you create a variable outside your function, 
//to perform that function, does that variable become the argument?
//How did I pass when the third name prints out exclaimation marks. 
//I was going to use variables and an if/else statement 
//specifically for Beyonce to ensure the function logs line 24. 

console.log(repeatDaniel);  // => "Daniel Daniel"
console.log(repeatMark);    // => "Mark Mark"
console.log(repeatBeyonce); // => "!!!Beyonce Beyonce!!!"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = repeatName;
