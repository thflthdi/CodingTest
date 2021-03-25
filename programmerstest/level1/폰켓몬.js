function solution(nums) {
    const set = new Set(nums)
    let answer = [...set]
    if(answer.length>(nums.length)/2){
        answer.splice(nums.length/2,answer.length-1)
    }
    return answer.length;
}
