
const lruAlgorithms = () => {
    // 다리가 아픈 동물 순서대로 들어옴
    // 동물 종류 : 무척추, 척추, 어류, 양서류, 파충류, 조류, 포유류
    // 동물들의 종이 같을 경우 무릎에 앉을 수 있음 다 회복된 동물은 언제든 빠짐
    // 무릎에 앉을 경우 1초 카운트
    // 아무도 없거나 자리가 꽉 찼을 때 다른종이 들어올 경우 가장 최근 같은 종이 한번도 들어오지 않은 종이 나가게 됨
    // 처음 새로운 종이 자리에 앉게 되면 자리 청소 시간 1분

    const pages = ['척추동물', '어류', '척추동물', '무척추동물', '파충류', '척추동물', '어류', '파충류']
    // const pages =['척추','어류','조류','양서류','양서류','조류','무척추','어류']
    let minute = 0
    let second = 0
    let sits = ['','','']
    let sitcount = [0,0,0]
    let min = sitcount[0]
    let minnum = 0
    for (let page of pages){
        for(let sit in sits){
            if(sits[sit]===''){
                sits[sit]=page
                sitcount[sit]=sitcount[sit]+2
                minute++
                break
            }else if(sits[sit]===page){
                sits[sit]=page
                sitcount[sit]=sitcount[sit]+2
                second++
                break
            }else if(sits[2]===sits[sit]&&sits[sit]!==''){
                sits[minnum]=page
                sitcount[minnum]=0
                sitcount[minnum]=sitcount[minnum]+2
                minute++
                break
            }
        }
        for(let sit in sitcount){
            sitcount[sit]--
            if(min>sitcount[sit]){
                min = sitcount[sit]
                minnum = sit
            }
        }
        min = 0
    }
    console.log(minute+'분 '+second+'초')
}
lruAlgorithms()