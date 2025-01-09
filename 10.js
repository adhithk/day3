let char = 'a'; 

let charCode = char.charCodeAt(0);

if (charCode >= 97 && charCode <= 122) {
    let uppercaseChar = String.fromCharCode(charCode - 32);
    console.log("Uppercase:", uppercaseChar);
} 
else if (charCode >= 65 && charCode <= 90) {
    let lowercaseChar = String.fromCharCode(charCode + 32);
    console.log("Lowercase:", lowercaseChar);
} else {
    console.log("Not an alphabetic character.");
}
