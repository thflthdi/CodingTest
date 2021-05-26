clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"], ["T","top"], ["skirt","pants"]]

function solution(clothes) {
    let answer = 0;
    closet = {}
    answer = answer + clothes.length
    
    clothes.forEach( dress => { 
        if(dress[1] in closet){
            closet[dress[1]].push(dress[0])
        }else{
            closet[dress[1]] = [dress[0]]
        }
    });

    function aa(first, rest){
        let cnt = 0;
        for(let i=0;i<rest.length;i++){
            
        }
    }

    for(let clo in closet){
        for(let a=0;a<closet.length;a++){
            aa(clo[a],clo)
        }
    }

    return answer;
}

console.log(solution(clothes))