// Pasword Generator HOMEWORK

// Global Variables 
var generateBtn = document.querySelector("#generate");
var length, upperCase, lowerCase, specialCharacters, numbers

// Array of options for password
specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '_', '=', '-', '/', ']', '[', '{', '}', '|', '?', ';', ':', '<', '>', '~'],
  upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'o', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

// Function called when user clicks on generate password; prompts that populate when generate password is clicked 
function generatePassword() {
  length = parseInt(window.prompt("How many characters would you like the password to contain. Choose a length of at least 8 characters and no more than 128 characters"))
  var password = ""
  if (length < 8 || length > 128 ) {
    alert("Not a valid response");
  } else {
    yesLowerCase = confirm("Do you want to add lower case. Select cancel for no, Okay for yes")
    yesUpperCase = confirm("Do you want to add upper case. Select cancel for no, Okay for yes")
    yesNumbers = confirm("Do you want to add numbers. Select cancel for no, Okay for yes")
    yesSpecialCharacters = confirm("Do you want to add special characters. Select cancel for no, Okay for yes")
  }

  if (!yesLowerCase && !yesUpperCase && !yesNumbers && !yesSpecialCharacters) {
    alert("Must include a character set")
    password = " "
  };




// local variables with empty arrays 
  var possiblePassword = []
  var newPassword = []

// if statements to produce options for password 

  if (yesLowerCase) {
    possiblePassword.push(...lowerCase)

  }
  if (yesUpperCase) {
    possiblePassword.push(...upperCase)

  }
  if (yesNumbers) {
    possiblePassword.push(...numbers)

  }
  if (yesSpecialCharacters) {
    possiblePassword.push(...specialCharacters)
  
  }

  console.log(possiblePassword);

// For loop to create random password 

  if (possiblePassword.length) {
    for (var i = 0; i < length; i++) {
      password += possiblePassword[Math.floor(Math.random() * possiblePassword.length)]
    }
  }
  console.log(password);

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)




