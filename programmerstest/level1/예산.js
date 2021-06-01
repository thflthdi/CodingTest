function solution(d, budget) {
    let bud = 0;
    let answer = 0;
    d.sort((a, b) => a - b);
    //sort()라고만 처음에 사용했다가 내 테스트는 다 통과했지만 제출 후 체점에서 50%만 성공
    //JS는 기본 sort()는 유닛코드의 코드 포인트를 기준으로 정렬됨을 잊지 말자.
    //compareFunction으로 오름차순 함수를 만들어 정렬할 것
    for(let i in d){
        bud = bud+d[i];
        if(bud>budget){
            answer = Number(i)
            break;
        }else if(Number(i)===d.length-1){
            answer = d.length
        }
    }

    return answer;
}