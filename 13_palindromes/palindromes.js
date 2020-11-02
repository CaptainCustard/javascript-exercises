// const name = 'Race car'

const palindromes = function(string) {
   processedString = string.replace(/[^A-Za-z]/g, "").toLowerCase()
   return (
      processedString
                     .split('')
                     .reverse()
                     .join('') == processedString
   );
   // A longer solution:
   // const array = [...string.replace(/[^A-Za-z]/g, "").toLowerCase()];
   // const arrayDuplicate = [...string.replace(/[^A-Za-z]/g, "").toLowerCase()];
   // const reversedArray = arrayDuplicate.reverse();
   // console.log(`${array} --- ${reversedArray}`)
   // return (array.join('') == reversedArray.join('')) ? true : false;
   

}
// console.log(palindromes(name))

module.exports = palindromes
