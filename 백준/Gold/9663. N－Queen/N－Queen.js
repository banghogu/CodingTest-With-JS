const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let queen = []

function possible(x,y){
    for(let[a,b] of queen){
        if(a==x || b==y){
            return false
        }
        if(Math.abs(a-x)==Math.abs(b-y)){
            return false
        }
    }
    return true
}

let cnt = 0
function recur(row){
    if(row == n){
        cnt +=1
    }
    for(let i=0; i<n; i++){
        if(!possible(row,i)){
            continue
        }
        queen.push([row,i])
        recur(row + 1)
        queen.pop()
    }
}
recur(0)
console.log(cnt)

