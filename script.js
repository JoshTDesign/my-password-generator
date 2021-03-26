// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");
function generatePassword(){

  var lower = "abcdefghijklmnopqrstuvwxyz";   //lowercase letter array
  var lowerArray = lower.split("");  
            
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";   //uppercase letter array 
  var upperArray = upper.split("");  
           
  var char = "!@#$%^&*()";    //special characters array  
  var charArray = char.split(""); 
  
  var num = "0123456789";   //numbers Array      
  var numArray = num.split("");

  var passLength;   //holds choice of password lenth                              
  var possibleArray = [];   //array that holds character set assembled from user choices
  var secPass = [];  //variable that holds password                           
  var answer;   //variable that temporarily holds user choices    

  //User must choose length of password
  passLength = prompt("How many characters?", "Password must be between 8 and 128 characters");
  
  //conditional to rule out edge cases
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Password must be between 8 and 128 characters");
    return("Your Secure Password");
  } else {
    
  //start of prompts to define password characters
    answer = prompt("Do you want to use lowercase letters? y/n").toLowerCase();
      if (answer === "y" || answer === "yes") {
        possibleArray = possibleArray.concat(lowerArray);
        } 
    
    answer = prompt("Do you want to use uppercase letters? y/n").toLowerCase();
      if (answer === "y" || answer === "yes") {
        possibleArray = possibleArray.concat(upperArray);
        } 
    
    answer = prompt("Do you want to use special characters? y/n").toLowerCase();
      if (answer === "y" || answer === "yes") {
        possibleArray = possibleArray.concat(charArray);
        }
  
    answer = prompt("Do you want to use numbers? y/n").toLowerCase();
      if (answer === "y" || answer === "yes") {
        possibleArray = possibleArray.concat(numArray);
        }

    //loop uses var 'passLength' to assemble password at correct Length and character set 
    for (let i = 0; i < passLength; i++) {
    secPass = secPass.concat(possibleArray[Math.floor(Math.random()* possibleArray.length)]);
    var pass = secPass.join(""); //joins password array into new string variable
    }
    return pass;
    }
  }

// Write password to the #password input
/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// DO NOT CHANGE THIS CODE
generateBtn.addEventListener("click", writePassword);
