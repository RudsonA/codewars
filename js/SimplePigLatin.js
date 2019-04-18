function pigIt(str){
  //Code here
  arr = str.split(' ');
  
  arr1 = [];
  
  for (let i= 0; i < arr.length; i++){
    word = arr[i]; 
    if (word == "!" || word == "?") {
      arr1.push(word);
    } else {
      arr1.push(word.slice(1) + word[0] + "ay");
    }
  }

  str = arr1.join(' ');

  return str;

}