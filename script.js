//DO NOT TOUCH Assignment Code
var generateBtn = document.querySelector("#generate");
var numberOfCharacters;
var includeNumbers;
var includeSpecialCharacters;
var includeUppercaseLetter;
var includeLowercaseLetter;
var options = []

var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVUXYZ'
var special = '!@#$%^&*()'
var number = '0123456789'

var finalPassword = "";


function getARandomCharacter(){
 var index = Math.floor(Math.random() * options.length);
 var char = options[index]
 return char;
}

function validateLength() {
  if ( numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert('Must be between 8 and 120 characters!')
    generatePassword()
  }
}

function generatePassword(){
  finalPassword = ""
  numberOfCharacters = prompt("How many characters?");
  validateLength()
  includeNumbers = confirm("Do you wants to include numbers?");
  includeSpecialCharacters = confirm("Do you want to add special characters?");
  includeUppercaseLetter= confirm("Doyou want to include uppercase letters?");
  includeLowercaseLetter= confirm("Do you want to include lowercase letter?");


  if (includeNumbers) {
   var numbers = number.split('')
   options = options.concat(numbers)
  }
  if (includeSpecialCharacters){
    var specials = special.split('')
    options = options.concat(specials)

  }
  if (includeLowercaseLetter) {
    var lowercase = lower.split('')
    options = options.concat(lowercase)
  }
  if (includeUppercaseLetter){
    var uppercase = upper.split('')
    options = options.concat(uppercase)
  }
  
 

  for ( i = 0; i < numberOfCharacters; i++) {
    var randomCharacter = getARandomCharacter();
    finalPassword += randomCharacter
  }
  
  return finalPassword
  

}  









// DO NOT TOUCH Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
