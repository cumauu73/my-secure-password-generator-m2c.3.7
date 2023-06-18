 // all variables 
  //lover
  //upper
  //numbers
  //specials charakters
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

//ask the lenght of password
//using windows prompt
// Function to generate a random password 
function generatePassword() {
  var length = prompt("Enter the length of the password (8-128 characters):");

  // if you chosee less then 8 or more than 128 show mwarning
  if (isNaN(length) || length < 8 || length > 128) {
    alert("warning! Please enter a number between 8 and 128.");
    return;
  }
//ask the user what they want
  var includeLowercase = confirm("do you want lowercase characters?");
  var includeUppercase = confirm("do you want uppercase characters?");
  var includeNumeric = confirm("do you want numeric characters?");
  var includeSpecialChars = confirm("do you want special characters?");

  // you shouls chose one character at leasy
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChars) {
    alert("You must select at least one character type!");
    return;
  }

 

  var allChars = "";
  var password = "";

  // Add selected character types to the pool of possible characters
  if (includeLowercase) {
    allChars += lowercaseChars;
  }
  if (includeUppercase) {
    allChars += uppercaseChars;
  }
  if (includeNumeric) {
    allChars += numericChars;
  }
  if (includeSpecialChars) {
    allChars += specialChars;
  }

  // Generate the password
  //using loop randomly adding password
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }
//   passwordText.value = password and display the pasword
  
  document.getElementById("password").value = password;
}
// event listener to generate button
// Call the generatePassword function when the button is clicked
document.getElementById("generate").addEventListener("click", generatePassword);