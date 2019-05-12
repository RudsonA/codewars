// https://www.codewars.com/kata/5835e18aae05334410000032/train/javascript

function replaceVogals(str) {
    const aeiou = /[aeiou]/gi; 
    return str.replace(aeiou, "?");
  }