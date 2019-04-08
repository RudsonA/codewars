// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.


function XO(str) {
    //code here
    let xcount = 0; 
    let ocount = 0; 

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "x") {
            xcount++;
        }
        if (str[i] === "o") {
            ocount++; 
        }
    }
    return xcount === ocount ? true : false; 
}