const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

let num = input[0].split(' ').map(Number)[0]
let goal = input[0].split(' ').map(Number)[1]
let arr = []
for (let i = 1; i <= num; i++) {
    arr.push(Number(input[i]))
}
let start = 1
let end = arr.reduce((a, b) => Math.max(a, b))
let result

while (start <= end) {
    let mid = parseInt((start + end) / 2)
    let sum = 0
    for (x of arr) {

        sum += parseInt(x / mid)

    }
    if (sum >= goal) {
        start = mid + 1
        result = mid
    }
    else {
        end = mid - 1
    }
}

console.log(result)
