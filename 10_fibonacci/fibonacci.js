const fibonacci = function(num) {
    let series = [1, 1];
    if (num >= 0) {
        for (let i = 2; i <= num; i++) {
            series [i] = series [i - 1] + series [i-2];
        }
        return series[num-1]
    } else {
        return 'OOPS'
    }  
} 
// console.log(fibonacci(5))
module.exports = fibonacci
