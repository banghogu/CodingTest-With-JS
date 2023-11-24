const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

let num = Number(input[0])
let arr = input[1].split(' ').map(Number).reverse()
let arr2 =[arr[0]]


for(x of arr){
    if(x>arr2[arr2.length-1]){
        arr2.push(x)
    }
    else{
        let index = lowerBound(arr2,x,0,arr2.length)
        arr2[index] = x
    }
}

console.log(num - arr2.length)


function lowerBound(arr, target, start, end) {
    while (start < end) {
       let mid = parseInt((start + end) / 2)
       if (arr[mid] >= target) end = mid
       else start = mid + 1
    }
    return end
 }