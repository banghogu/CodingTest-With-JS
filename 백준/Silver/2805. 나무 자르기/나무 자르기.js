const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

let num = input[0].split(' ').map(Number)[0]
let goal = input[0].split(' ').map(Number)[1]
let arr = input[1].split(' ').map(Number)

let start = 0
let end = arr.reduce((a,b)=>Math.max(a,b))
let result

while(start<=end){
    let mid = parseInt((start+end)/2)
    let sum = 0
    for(x of arr){
        if(x > mid){
            sum += (x - mid)
        }
    }
    if(sum>=goal){
        start = mid + 1
        result = mid
    }
    else{
        end = mid - 1
    }
}

console.log(result)