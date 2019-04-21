// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55 

// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript


function findUniq(arr) {
    // do magic
    let uniq;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] || arr[i] === arr[i - 1] || arr[i] === arr[i + 2]) {
            continue;
        } else {
            uniq = arr[i];
            break;
        }

    }

    return uniq;
}
