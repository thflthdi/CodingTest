function solution(arr)
{
    let answer = []
    for (let element of arr){
        if(answer[answer.length-1]!==element){
            answer.push(element)
        }
    }
    return answer;
}
