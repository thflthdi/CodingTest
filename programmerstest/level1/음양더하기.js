const absolutes = [1,2,3];
const signs = [false,false,true];

function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((absolute,index) => {
        signs[index]? answer = answer+absolute : answer = answer-absolute;
    });
    return answer;
}

console.log(solution(absolutes, signs))