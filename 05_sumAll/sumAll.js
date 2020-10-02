const sumAll = function(n,m) {
    let largerNum;
    let smallerNum;
    let results;
    if (typeof n === 'number' && typeof m === 'number' && m > 0 && n > 0) {
        if ( n > m) {
            largerNum = n;
            smallerNum = m;
        } else {
            largerNum = m;
            smallerNum = n;
        }
        for (let i = smallerNum + 1; i <= largerNum; i++) {
            smallerNum = smallerNum + i;
            results = smallerNum;
        }
        return results;
    } else {
        return 'ERROR';
    }
}
module.exports = sumAll
// Just to live-test
//console.log(sumAll(-1,7))
