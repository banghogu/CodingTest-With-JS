const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let m = Number(input[0])
let arr = []
for(let i=1; i<=n; i++){
    arr.push(i)
}
let visited = new Array(n).fill(false)
let selected = []
let answer = ''

function dfs(arr,depth){
    if(depth == m){
        let result = []
        for(let i of selected){
            result.push(arr[i])
        }
        for(let x of result){
            answer += x + " "
        }
        answer += "\n"
        return
    }
    for(let i=0; i<arr.length; i++){
        if(visited[i]){
            continue
        }
        visited[i] = true
        selected.push(i)
        dfs(arr,depth+1)
        visited[i] = false
        selected.pop()
    }
}

dfs(arr,0)
console.log(answer)