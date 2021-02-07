const incodingTest = () => {
    const letter = {
        code : ['   + -- + - + -  ', '   + --- + - +   ', '   + -- + - + -   ', '   + - + - + - +']
    } 
    let s =''
    for(let i in letter.code){
        //for of로 찍었으면 자릿수가 아니라 문자가 나옴
        let line = letter.code[i]
        let no_space_line = line.replace(/ /g,'')
        let plus_ch_one = no_space_line.replace(/\+/g,'1')
        let minus_ch_zero = plus_ch_one.replace(/\-/g,'0')
        // replace를 이어서 쓸 수 있음 굳이 3줄로 안써도 됨 ex)test.replace(...).replace(...)
        let final = String.fromCharCode(parseInt(minus_ch_zero,2))
        s += final
    }
    console.log(s)
}

const withJavaDog = () => {
    // let rock = [1, 2, 1, 4]
    let rock = [5, 3, 4, 1, 3, 8, 3]
    const dogdata = [{
        "이름" : "루비독",
        "나이" : "95년생",
        "점프력" : "3",
        "몸무게" : "4",
        },{
        "이름" : "피치독",
        "나이" : "95년생",
        "점프력" : "3",
        "몸무게" : "3",
        },{
        "이름" : "씨-독",
        "나이" : "72년생",
        "점프력" : "2",
        "몸무게" : "1",
        },{
        "이름" : "코볼독",
        "나이" : "59년생",
        "점프력" : "1",
        "몸무게" : "1",
        },
    ]

    let succes =''
    for(let i of dogdata){
        let howfor = parseInt(rock.length/Number(i.점프력))+1
        for(let j=1;j<howfor;j++){
            let a = Number(i.점프력)*j-1
            if (rock[a]<Number(i.몸무게)){
                rock[a]=rock[a]-Number(i.몸무게)
                break
            }
            else if(j===howfor-1) {
                succes=succes+i.이름
            }
            else{
                rock[a]=rock[a]-Number(i.몸무게)
            }
        }
    }
    console.log(succes)
}

// incodingTest()
withJavaDog()