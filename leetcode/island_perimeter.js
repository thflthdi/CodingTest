/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let answer = 0;
    for(let i in grid){
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j]===1){
                if(!grid[i][j-1] || grid[i][j-1]===0){
                    answer++;
                }
                if(!grid[i][j+1] || grid[i][j+1]===0){
                    answer++;
                }
                if(!grid[Number(i)-1]){
                    answer++;
                }else{
                    if(grid[Number(i)-1][j]===0 || !grid[Number(i)-1][j]){
                        answer++;
                    }
                }
                if(!grid[Number(i)+1]){
                    answer++;
                }else{
                    if(grid[Number(i)+1][j]===0 || !grid[Number(i)+1][j]){
                        answer++;
                    }
                }
            }
        }
    }
    return answer;
};
