const repeatString = function(word = '', num = Math.floor(Math.random() * 1000)) {
let string = [];
if (num < 0) {
    return 'ERROR'
} else {
    for (i=0; i < num; i++) {
        string.push(word)
    }
    return string.join("");
    }
}
module.exports = repeatString

// This console.log was just to debug the code in VS Code.
// It is not needed to test it using jasmine/npm.
console.log(repeatString('Omar', 5))