function solution(n) {
    let answer = '';
    if(n%2===0){
        for(let i=0;i<n/2;i++){
            answer=answer+'수박'
        }
    }else{
        for(let i=0;i<parseInt(n/2);i++){
            answer=answer+'수박'
        }
        answer=answer+'수'
    }
    return answer;
}
// repeat(count); 함수를 이용하여 문자열을 count만큼 반복할 수 있다.
// "수박".repeat(n).slice(0,n);
