function solution(a, b) {
    let answer = 0;
    for(let value in a){
        answer = a[value]*b[value] + answer
    }
    return answer;
}
