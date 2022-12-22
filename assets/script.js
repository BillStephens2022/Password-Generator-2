
function updateSpan(val) {
    document.getElementById('sliderValue').textContent = val;
}

const errorMessageEl = $("#error-message");



function generatePassword() {
    
    // Character sets
    const upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
    const numString = "0123456789";
    const specCharString = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    let charString = "";   // will be used to concatentate character sets above based on user selections


    let numChar = $("#slider").val();
    let needLower = $("#lowercaseChecked").prop("checked");  //returns true if checked, false if unchecked
    let needUpper = $("#uppercaseChecked").prop("checked");
    let needNum = $("#numberChecked").prop("checked");
    let needSpecChar = $("#specCharChecked").prop("checked");
    let newPassword = "";

    if (needUpper === false &&
        needLower === false &&
        needNum === false && 
        needSpecChar === false) {
            errorMessageEl.text("You must check at least one box above");
    } else {
        errorMessageEl.text("");
    };

     // Using 'if' statements, the character sets are then concatenated into a variable called 'charString' based on the user selections.

    if (needUpper) {
        charString = charString + upperCaseString;
    };

    if (needLower) {
        charString = charString + lowerCaseString;
    };

    if (needNum) {
        charString = charString + numString;
    };

    if (needSpecChar) {
        charString = charString + specCharString;
    };

     /* for loop used to randomly select the characters needed based on the charString variable which 
  contains the full character set based on user input */

    for (let i = 0; i < numChar; i++) {
        let newChar = charString[Math.floor((Math.random() * charString.length))];
        newPassword = newPassword + newChar;
    };
    
    return newPassword;
} 
    
// Write password to the #password input
function writePassword(e) {
    e.preventDefault();
    let password = generatePassword();
    const passwordText = document.querySelector("#password");
  
    passwordText.value = password;
    console.log(password);
    console.log(passwordText.value);
  }

$("#generatePasswordButton").click(writePassword);




