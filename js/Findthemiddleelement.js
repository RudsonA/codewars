// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0

var gimme = function (inputArray) {

    let arr = [];
    for (let i = 0; i < inputArray.length; i++) {
        arr.push(inputArray[i]);
    }

    arr = arr.sort(function (a,b){return a-b});
    let middle = arr[1];
    let middleValue = inputArray.indexOf(middle);
    return middleValue;
}
