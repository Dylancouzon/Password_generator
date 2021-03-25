// Declaring all the possible parameters
var length = [8, 128];
lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
numeric = '0123456789'.split('');
special = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split('');

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function getInfos() {
  //Enter the password Length
  var PassLength = prompt("Please enter the desired Length", "8-128 characters");
  if (PassLength >= length[0] && PassLength <= length[1]) {
    PassLowercase = confirm("Would you like your password to include Lowercase letters ?");
    PassUppercase = confirm("Would you like your password to include Uppercase letters ?");
    Passnumeric = confirm("Would you like your password to include numbers ?");
    Passspecial = confirm("Would you like your password to include special characters ?");
    if(PassLowercase || PassUppercase || Passnumeric || Passspecial){

    // Error
    }else{ alert("Please Select at least one type of Characters.");}
  // Error  
  }else{ alert("Please enter a length between 8 and 128 characters.");}
}
// Add event listener to generate button
generateBtn.addEventListener("click", getInfos);

// console.log(PassLowercase);
// use concat to mix together 