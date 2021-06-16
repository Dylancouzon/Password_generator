[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br>

# Password Generator
Realized for UC Berkeley Extension Coding Bootcamp

![Site](./Assets/Screenshot.png)

<br>
<form action="https://dylancouzon.github.io/Password_generator" method="get" target="_blank"><button type="submit">Deployed Link</button></form>
<br>

## Table of Contents

1. [Technology](#technology)
2. [Summary](#Summary)
3. [Code Snippet](#Code)
3. [Author](#Author)
<br>
<hr>

## Technology
<img align="left" alt="HTML" width="25x" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"/> &nbsp;
<img align="left" alt="JavaScript" width="25x" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"/> &nbsp;
<img align="left" alt="JavaScript" width="25x" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"/> &nbsp;
<br>
<hr>

## Summary 
This Password Generator allows an user to generate a random and unique password between 8 and 128 characters.
The User is free to choose what kind of characters will be included in the password between Lowercase letters, uppercase letters, numbers and symbole.
<br>
<hr>

## Code
```javascript
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
```
Since the password generation is random, you are not assured that the password generated will contain all the requested characters.
The code snippet above demonstrate how I checked if the password was containing all the requested characters and if no, generate another one.
<br>
<hr>

## Author Links
- [dylancouzon@gmail.com](mailto:dylancouzon@gmail.com)
- [GitHub](https://github.com/Dylancouzon)
- [LinkedIn](https://www.linkedin.com/in/dcouzon/)

