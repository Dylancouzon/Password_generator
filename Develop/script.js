// Declaring all the possible characters
var length = [8, 128];
lowercase = 'abcdefghijklmnopqrstuvwxyz';
uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
numeric = '0123456789';
special = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var MixedOptions = [lowercase, uppercase, numeric, special]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Generating password comment, the 2 arguments are the password length and a string of the characters we want to use
function generatePassword(length, allcharacters) {
  var finalPass = '';
  // Creates a random number between 1 and allcharacters.length, then select the number with that index inside the characters string
  // Repeats for each character we need 
  for (i=1;i<=length;i++) {
    var c = Math.floor(Math.random()*allcharacters.length + 1);
    finalPass += allcharacters.charAt(c)
  }
   //Executes the writePassword command
  writePassword(finalPass);
}

function getInfos() {
  //Enter the password Length
  var PassLength = prompt("Please enter the desired Length", "8-128 characters");
  if (PassLength >= length[0] && PassLength <= length[1]) {
    // Ask for all the different characters
    PassLowercase = confirm("Would you like your password to include Lowercase letters ?");
    PassUppercase = confirm("Would you like your password to include Uppercase letters ?");
    Passnumeric = confirm("Would you like your password to include numbers ?");
    Passspecial = confirm("Would you like your password to include special characters ?");
    // Check if at least 1 option has been selected
    if(PassLowercase || PassUppercase || Passnumeric || Passspecial){
      // Put all the results into an Array
      var allChars = [PassLowercase, PassUppercase, Passnumeric, Passspecial];
      var charString = "";
        // If the special char is true, it will be added to a string
        allChars.forEach(function(option, index){
          if(option){
            charString += MixedOptions[index];
          }
        });
        //Send the string of characters to the generatePassword function
        generatePassword(PassLength, charString);
    // Error
    }else{ alert("Please Select at least one type of Characters.");}
  // Error  
  }else{ alert("Please enter a length between 8 and 128 characters.");}
}
// Add event listener to generate button
generateBtn.addEventListener("click", getInfos);