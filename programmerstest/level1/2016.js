function solution(a, b) {
    const thirtyone = [1,3,5,7,8,10,12];
    const thirty = [4,6,9,11];
    let days = 0;
    const day = ["THU","FRI","SAT","SUN","MON","TUE","WED"]
    for(let i=1; i<a; i++){
        console.log(i)
        if(thirtyone.includes(i)){
            days = days+31;
        }else if(thirty.includes(i)){
            days = days+30;
        }else if(i === 2){
            days = days+29
        }
    }
    days = days+b
    days = days%7
    return day[days];
}