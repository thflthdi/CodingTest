function solution(arr, divisor) {
    let answer = [];
    for(let element of arr){
        if(element!==0 && element%divisor === 0){
            answer.push(element)
        }
    }
    if(answer.length===0){
        answer.push(-1)
    }

    return answer.sort(function(a, b) {return a - b})
}

