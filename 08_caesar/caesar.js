const caesar = function(sentence, n) {
    let sentenceArray = [];
    let cipherArray = [];
    let ascii = [];
    elementIndex  = sentence.length - 1;
    // Going to loop as many time as the number of charachters in the string "sentence."
    for (let i = 0; i<= elementIndex; i++) {
        // Every loop puts a charachter from string "sentence" inside sentenceArray.
        sentenceArray.push (sentence.charAt(i))
        // For every element inside sentenceArray, ASCII is obtained and stored inside ascii array.
        ascii[i] = sentenceArray[i].charCodeAt(0);
        // Checking to see whether ASCII belongs to lowercase or uppercase letters.
        if (ascii[i] <= 90 && ascii[i] >= 65) {
            // ASCII is shifted by (n) and the result (a.k.a. shifted ASCII) is stored in cipherArray.
            cipherArray [i] = ((ascii[i] + n - 65) % 26 + 26) % 26 + 65;
        } else if (ascii[i] <= 122 && ascii[i] >= 97) {
            // ASCII is shifted by (n) and the result (a.k.a. shifted ASCII) is stored in cipherArray.
            cipherArray [i] = ((ascii[i] + n - 97) % 26 + 26) % 26 + 97;
        } else {
            // ASCII is stored in cipherArray (without shifting.)
            cipherArray [i] = ascii[i]
        }
    }
    // This string method is using "apply" to be used on an array. It return a string based on ASCII.
    return String.fromCharCode.apply(null, cipherArray);
}

// console.log(caesar('a', -1))
module.exports = caesar