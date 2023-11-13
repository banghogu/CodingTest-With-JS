const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

let num = Number(input[0])
let arr = input[1].split(' ').map(Number)
let m = Number(input[2])
let start = 0; //상한액의 최솟값
let end = arr.reduce((a, b) => Math.max(a, b)) //상한액의 최댓값
let result = 0 //최종 상한액

while (start <= end) {
   let mid = parseInt((start + end) / 2)
   let total = 0
   for (x of arr) {
      total += Math.min(mid, x)
   }
   if (total <= m) {
      result = mid
      start = mid + 1
   }
   else {
      end = mid - 1
   }
}
console.log(result)



