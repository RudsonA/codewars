'use strict'
// Regex validate PIN code
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// eg:

// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false

//  Use module to deal with decimals 

function validatePIN (pin) {
    //return true or false

    let nums = '0123456789';

    for (let i = 0; i < pin.length; i++) {
      let element = pin[i];
      if (nums.indexOf(element) === -1) {
        return false;
      }
      
    }

    if (pin.length === 4 || pin.length === 6) {
      if (isNaN(pin) === false && pin % 1 === 0) {
        return true;
      } else {
        return false; 
      }
    } else {
      return false;
    }
  }