const left = 13;
const right = 17;

const solution = (left, right) => {
    let answer = 0;
    for(left;left<right+1;left++){
        let cnt = 0;
        for(let i=1; i<left+1; i++){
            if(left % i === 0){
                cnt++;
            }
        }
        if(cnt % 2 === 0){
            answer = answer+left;
        }else{
            answer = answer-left;
        }
    }
    return answer;
}

console.log(solution(left, right))