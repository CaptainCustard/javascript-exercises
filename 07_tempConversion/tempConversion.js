const ftoc = function(f) {
  return Math.round((f-32)*10/1.8)/10;

}

const ctof = function(c) {
  return Math.round(((c*1.8+32)*10))/10;
}

module.exports = {
  ftoc,
  ctof
}
// console.log(ftoc(124))