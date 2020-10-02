const reverseString = function(word) {
let string = word;
let stringReversed = [];
let n = (string.length -1 );
for (i = n; i >= 0; i--) {
    stringReversed.push (string.charAt(i))
}
return stringReversed.join('');
}

module.exports = reverseString

// The following line is to debug the function in VS Code. It is not neccessary for jasmine/npm.
//console.log(reverseString("Omar Saleh"))