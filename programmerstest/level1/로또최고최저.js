// const lottos = [44, 1, 0, 0, 31, 25]	
// const win_nums = [31, 10, 45, 1, 6, 19]

// const lottos = [0, 0, 0, 0, 0, 0]
// const win_nums = [38, 19, 20, 40, 15, 25]

const lottos = 	[45, 4, 35, 20, 3, 9]
const win_nums = [20, 9, 3, 45, 4, 35]

// const lottos = 	[0, 0, 0, 0, 0, 0]
// const win_nums = [38, 19, 20, 40, 15, 25]

const extract = (getCorrect) => {
    if(getCorrect === 6){ return 1}
    else if(getCorrect === 5){return 2}
    else if(getCorrect === 4){return 3}
    else if(getCorrect === 3){return 4}
    else if(getCorrect === 2){return 5}
    else{return 6}
}

const solution = (lottos, win_nums) => {
    let answer = [];
    //최저 순위
    const getCorrectNums = win_nums.filter( num => lottos.find( lotto => num === lotto ))
    const getZero = lottos.filter( zero => zero===0 )
    answer.push(extract(getCorrectNums.length+getZero.length))
    answer.push(extract(getCorrectNums.length))
    
    return answer;
}

console.log(solution(lottos,win_nums))