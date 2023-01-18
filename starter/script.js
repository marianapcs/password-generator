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

//Add an event listener to the button 


//Function to prompt for password input
function getPasswordLength () {
  // to clear array with each click of button
  generatorArr.length = 0;
  var passwordLength = parseInt (prompt ("Please select how many characters you want your password to have", "Between 10 - 64"));
  if (passwordLength >= 10 && passwordLength <= 64){
  console.log(passwordLength);
  getPasswordOptions()
  }
}

// // Function to prompt user for password options
// function getPasswordOptions(prompt) {

// }

// // Function for getting a random element from an array
// you need to create an array of the characters you selected
// function getRandom(arr) {

// }

// // Function to generate password with user input
// function generatePassword() {

// }


// //Generate the passwords based on the prompts
// // Length of password
// // At least 10 characters but no more than 64.

// function getPrompts () {
//   characterLength = prompt ("Choose Password Length (From 10 - 64 Characters");
// }


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);




// Generate a password when the button is clicked
// Present a series of prompts for password criteria
// Character types
// Lowercase
// Uppercase
// Numeric
// Special characters ($@%&*, etc)
// Code should validate for each input and at least one character type should be selected
// Once prompts are answered then the password should be generated and displayed in an alert or written to the page

