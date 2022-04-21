// Assignment Code
var generateBtn = document.querySelector("#generate");
var length, upperCase, lowerCase, specialCharacters, numbers

 specialCharacters = ['!','@','#','$','%','^','&','*','(',')','+','_', '=','-', '/', ']','[','{','}','|','?',';', ':', '<', '>', '~'],
 upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','o','m','n','o','p','r','s','t','u','v','w','x','y','z']
numbers = ['1','2','3','4','5','6','7','8','9']

function generatePassword () {
  length = parseInt(window.prompt("How many characters would you like the password to contain. Choose a length of at least 8 characters and no more than 128 characters"))

  if (length < 8 || length > 128) {
    alert("Not a valid response");
   } else {
      lowerCase = confirm ("Do you want to add lower case. Select cancel for no, Okay for yes")
      upperCase = confirm ("Do you want to add upper case. Select cancel for no, Okay for yes")
      numbers = confirm ("Do you want to add numbers. Select cancel for no, Okay for yes")
      specialCharacters = confirm("Do you want to add special characters. Select cancel for no, Okay for yes")
   } 


var possiblePassword = []
var newPassword = []

if (lowerCase) {
  possiblePassword = possiblePassword.concat(lowerCase)
}
if (upperCase) {
  possiblePassword = possiblePassword.concat(upperCase)
}
if (numbers) {
  possiblePassword = possiblePassword.concat(numbers)
}
if (specialCharacters) {
  possiblePassword = possiblePassword.concat(specialCharacters)
}


var password = ""

for (var i =0; i < length; i++) {
  password += (possiblePassword [Math.floor(math.random() * possiblePassword.length)])
}

return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword())




