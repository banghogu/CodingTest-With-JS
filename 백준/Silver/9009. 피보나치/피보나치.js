const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let num = Number(input[0])

let pibo = [0,1]

while(pibo[pibo.length-1] < 1e9){
    pibo.push(pibo[pibo.length-2]+pibo[pibo.length-1])
}

for(let i=1; i<=num; i++){
    let n = Number(input[i])
    let j = pibo.length-1
    let arr = []
    while(n>0){
        if(n>=pibo[j]){
            n -= pibo[j]
            arr.push(pibo[j])
        }
        j--
    }
    arr.sort((a,b)=>a-b)

    let answer = ''
    for(j=0; j<arr.length; j++){
        answer += `${arr[j]} `
    }
    console.log(answer)
}