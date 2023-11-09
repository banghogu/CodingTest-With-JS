const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let num = Number(input[0])
let arr = []

for(let i=1; i<=num; i++){
    arr.push(input[i].split(' ').map(Number))
}

arr.sort(function(a,b){
    if(a[1]!==b[1]){
        return a[1] - b[1]
    }
    else{
        return a[0] - b[0]
    }
})

let min = arr[0][1]
let cnt = 1

for(i=1; i<num; i++){
    if(min <= arr[i][0]){
        min = arr[i][1]
        cnt++
    }
}

console.log(cnt)