// Declaring all the possible characters in a string and in an array
var length = [8, 128];
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var Arrlowercase = lowercase.split("");
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var Arruppercase = uppercase.split("");
var numeric = '0123456789';
var Arrnumeric = numeric.split("");
var special = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var Arrspecial = special.split("");
var MixedOptions = [lowercase, uppercase, numeric, special]
var optionNames = ["Arrlowercase", "Arruppercase", "Arrnumeric", "Arrspecial"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Check if the password contains every selected type of character. If not, rerun the generatePassword function
function checkPassword(password, allChars, PassLength, charString){
  var checkResult = [];
  //Check is the type of character is selected, if yes, runs a loops that determines if any of the selected character has been included in the password, if not, generates a new password
  allChars.forEach(function(option, index){
    var optionSelected = eval(optionNames[index]);
    if(option){
      // Loop that check if any of the characters is included
      for(i=0; i<optionSelected.length; i++){
        if(password.includes(optionSelected[i])){
          checkResult.push(true);
          break;
        }
      };
    }else{checkResult.push(false);}
  });
   //Check if the password contains all the characters requested
    if(JSON.stringify(allChars) == JSON.stringify(checkResult)){
      writePassword(password);
    }else{
      generatePassword(PassLength, charString, allChars);
    }
  }


//Generating password comment, the 2 arguments are the password length and a string of the characters we want to use
function generatePassword(PassLength, allcharacters, allChars) {
  var finalPass = '';
  var Keepallcharacters = allcharacters;
  // Creates a random number between 1 and allcharacters.length, then select the number with that index inside the characters string
  // Repeats for each character we need 
  for (i=1;i<=PassLength;i++) {
    var c = Math.floor(Math.random()*allcharacters.length + 1);
    finalPass += allcharacters.charAt(c)
  }
   //Executes the checkPassword command
   checkPassword(finalPass, allChars, PassLength, Keepallcharacters);
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
        generatePassword(PassLength, charString, allChars);
    // Error
    }else{ alert("Please Select at least one type of Characters.");}
  // Error  
  }else{ alert("Please enter a length between 8 and 128 characters.");}
}
// Add event listener to generate button
generateBtn.addEventListener("click", getInfos);