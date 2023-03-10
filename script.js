// Array of special characters to be included in password
var specialCharacters = [ '@', '%', '+', '\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~', '-', '_', '.'];


// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];


//declare variables for each array 

var numberCharacters;
var special;
var numbers;
var lower;
var upper;




//Add an event listener to the button 
// this returns the first element within the document that matches the specified selector. 
var generateButton = document.querySelector("#generate");

//this is showing an error say that "cannot read properties of null(reading'addEventListner")
generateButton.addEventListener("click", function () {
  getPasswordOptions()
  console.log("it's working!")
})


//Function to prompt for password input
// // Function to prompt user for password options
function getPasswordOptions () {
  // to clear array with each click of button
  numberCharacters = prompt ("Please select how many characters you want your password to have");
  console.log(numberCharacters)
//using isNaN() function because it determines wheter a value is not a number. 
if (isNaN(numberCharacters)){
  alert("please pick a number between 10 and 64")
  getPasswordOptions()
}
//else if for conditional statements for each alert, tried to join both alerts into one
//creating two else if statements because not working combined
else if (numberCharacters < 10) {
  alert ("Password length must be at least 10 characters")
  getPasswordOptions()
}
else if (numberCharacters > 65){
  alert("Password length must be no more than 64 characters")
  getPasswordOptions()
}
// using confirm to display the message box with an ok and cancel button, automatically returns true if the user clicks ok otherwise returns false
else { 
  characterOptions ()}
  function characterOptions() {
    lower = confirm ("Do you want to include lowercase characters?")
    upper = confirm ("Do you want to include uppercase characters?")
    numbers = confirm ("Do you want to include numbers?")
    special = confirm ("Do you want to include special characters?")

    //if statment for if no characater options selected
    //! is a logical reversal operaotr, e.g. if the value is true it will turn it to false and if false turns it to true. 
    // && (is a logical conjunction operator) for a set of boolean operands will be true if and only if all the operands are true. 
    if (!numbers && !upper && !lower  && !special) {
      alert("please choose at least one type of character for your password")
      characterOptions()
    }
  }
  createArray ()
  //return statement ends function execution and specifies a value to be returned to the function caller
  //once you have gone through previosu functions alert box should disappear
  return;
}



// // Function for getting a random element from an array
// you need to create an array of the characters you selected
function getRandom(arr) {
  //using const = specifies thatthe varibale value cannot be changed once it has been assigned. allows you to only modify the value of the array but the reference to the array cannot be changed. 

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  //get random item
  const item = arr[randomIndex];
  return item;
 }

// now create an array of the selected characters (for the diff options)

var chosenCharacters = [];
function createArray () {
  if (upper) {
    chosenCharacters = chosenCharacters.concat(upperCasedCharacters);
  }
  if (special) {
    chosenCharacters = chosenCharacters.concat(specialCharacters);
  }
  if (lower) {
    chosenCharacters = chosenCharacters.concat(lowerCasedCharacters);
  }
  if (numbers) {
    chosenCharacters = chosenCharacters.concat(numericCharacters);
  }
  console.log(chosenCharacters)
}

// // Function to generate password with user input
 function generatePassword() {
  var password = "";
  //for loop, set variable before the loop starts (let i=0), then define condition for the loop to run, then increase the value i++ each time code block in loop is executed
  for (var i=0; i < numberCharacters; i++) {
    password = password + getRandom(chosenCharacters)};
    return password
  }
  console.log(password)


// //Generate the passwords based on the prompts
generatePassword ()
//# because id= generate
var generateBtn = document.querySelector('#generate');


// // Write password to the #password input
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector('#password');
 passwordText.value = password;
 }

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



//Instructions:
// Generate a password when the button is clicked
// Present a series of prompts for password criteria
// Character types
// Lowercase
// Uppercase
// Numeric
// Special characters ($@%&*, etc)
// Code should validate for each input and at least one character type should be selected
// Once prompts are answered then the password should be generated and displayed in an alert or written to the page

