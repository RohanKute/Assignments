
// Problem :


const sentence = "whats the day today";
//approach 1 
console.log(reverseWords1(sentence)); // using .split() method
//approach 2
console.log(reverseWords2(sentence));  
 

function reverseWords1(sentence) {
    // split words and store in arr
    const wordsArr = sentence.split(" ");
    //call "reverse" to reverse every word
    const ans = reverse(wordsArr);
    return ans;
}

function reverseWords2(sentence){
    // creating new arr
    let newArr = [];
    for (let i = 0; i < sentence.length; i++) {
          let temp = "";
          // get a word by checking spaces
          while(sentence[i] != " " && i < sentence.length){
             temp += sentence[i];
             i++;
          }
          // store/push it into the array
          newArr.push(temp);
    } 
    //call "reverse" to reverse every word
    const ans = reverse(newArr);
    return ans; 
}

function reverse(arr) {
    let reversedStr = "";
    // loop over that arr
    for (let i = 0; i < arr.length; i++) {
        let temp = "";
        let len = arr[i].length-1;
        // get every word in that arr and reverse it 
        while(len >= 0){
            temp += arr[i][len--];
        }
        // add it into main string 
        reversedStr+= temp + " ";
    }
 // remove trailing and leading spaces and return  
 return reversedStr.trim();
}