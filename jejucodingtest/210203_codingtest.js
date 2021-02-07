const goIsland = () => {
    //인원 : 정시 25명 10분마다 15명
    // 09:00 ~ 20:50
    //14000605 // 14000606~7 무조건 같은 배
    //1월 1024 2월 512 3월 256 4월 128 5월 64 6월 32 7월 16 8월 8
    //9월 4 10월 2일
    const standing = 14000605
    // const standing = 1200202
    const hour = 100
    const day = 1200
    const year = 2046
    const days = standing/day
    let time = 9
    let last = standing%day
    let minutes = [25,40,55,70,85,100]
    let min = 0
    for(time;time<21;time++){
        if (last>hour || last===hour){
            last=last-hour
        }
        else{
            time=time
            break
        }
    }
    for(let minute in minutes){
        if(last<minutes[minute]){
            min=minute*10
            break
        }
    }
    const years = 2020+parseInt(days/year)
    let month_day = parseInt(days%year)
    let month = 1

    for(let i=10; i>0;i--){
        if(month_day>2**i || month_day===2**i){
            month_day=month_day-2**i
            month=month+1
        }
        else{break;}
    }
    console.log(years+'년'+month+'월'+month_day+'일'+time+'시'+min+'분')
}

goIsland()