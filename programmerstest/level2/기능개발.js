function solution(progresses, speeds) {
    let rest_day = [];
    let answer = [];
    progresses.forEach(function(item,index){
        rest_day.push(Math.ceil((100-item)/speeds[index]));
    });
    let result = 0 ;
    let num = 0 ;
    for(let progress in progresses){
        result++;
        num++;
        console.log(rest_day[0])
        if(rest_day[0]<rest_day[num]){
            rest_day.splice(0,num)
            console.log(rest_day)
            answer.push(result)
            num = 0;
            result = 0;
        }
    }
    answer.push(result)
    return answer;
}
