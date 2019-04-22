"use strict"
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    string = string.toLowerCase();

    let alphabet = letters.split('');
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "." || string[i] == "?" || string[i] == "," || string[i] == " " || string[i] == "!") {
            continue;
        }

        for (let y = 0; y < alphabet.length; y++) {
            if (string[i] == alphabet[y]) {
                delete alphabet[y];
            }
        }
    }

    let counter = 0;

    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] == undefined) {
            counter += 1;
        }        
    }

    return counter == 26 ? true:false;
}