// https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript

function validate(password) {
    console.log(password)
    console.log(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password))
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password);
    }