const isSosu = (result) => {
  for(let i = 2 ; i < result ; ++i){
    if(result % i == 0) return false;
  }
  return true;
}

const solution = (nums) => {
    let answer = 0
    const elements = [];

    for(let num=0; num<nums.length; num++){
        for(let i=num+1; i<nums.length; i++){
            for(let j=i+1; j<nums.length; j++){
                elements.push([nums[num],nums[i],nums[j]])
            }
        }
    }

    elements.forEach((element)=>{
        const result = element[0]+element[1]+element[2]
        if(isSosu(result)){
            answer++;
        }
    })
    return answer
}
