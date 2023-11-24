const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

let arr = input[1].split(' ').map(Number)
let num = Number(input[2])
let targetarr = input[3].split(' ').map(Number)
 
arr.sort((a,b)=>a-b)

let result = ''
for (let i = 0; i < num; i++) {
   let cnt = count(arr,targetarr[i],targetarr[i])
   result += cnt +' '

}
console.log(result)

function lowerBound(arr, target, start, end) {
   while (start < end) {
      let mid = parseInt((start + end) / 2)
      if (arr[mid] >= target) end = mid
      else start = mid + 1
   }
   return end
}

function upperBound(arr, target, start, end) {
   while (start < end) {
      let mid = parseInt((start + end) / 2)
      if (arr[mid] > target) end = mid
      else start = mid + 1
   }
   return end
}

function count(arr, leftvalue, rightvalue) {
   let right = upperBound(arr, rightvalue, 0, arr.length)
   let left = lowerBound(arr, leftvalue, 0, arr.length)
   return right - left
}

