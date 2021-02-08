function solution(numbers) {
    var answer = [];
    for(let number in numbers){
        for(let number2 in numbers){
            if(number===number2){
                continue
            }else{
                answer.push(numbers[number]+numbers[number2])
            }
        }
    }
    const set = new Set(answer);
    answer = [...set]
    answer = answer.sort(function(a, b) { 
        return a - b;
    });

    return answer;
}
