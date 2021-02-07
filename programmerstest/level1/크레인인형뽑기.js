function solution(board, moves) {
    let stack = [];
    let answer = 0
    
    for(let move of moves){
        for(let onboard of board){
            if(onboard[move-1]){
                if(stack[stack.length-1]===onboard[move-1]){
                    stack.pop()
                    answer=answer+2
                }
                else{
                    stack.push(onboard[move-1]);   
                }
                onboard[move-1]=0
                break;
            }
        }
    }
    
    return answer;
}
