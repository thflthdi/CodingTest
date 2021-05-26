
// const new_id = 	"...!@BaT#*..y.abcdefghijklm";
const new_id = 	"=.=";
// const new_id = 	"123_.def";
// const new_id = 	"z-+.^.";

function solution(new_id) {
    let answer = ""
    let words = []
    //splice()
    //^[-_a-z\d][.-_a-z\d]+?[-_a-z\d]$
    if(new_id.length===0){
        return answer="aaa"
    }
    try{
        words = new_id.split("")
    }
    catch(e){
        words = new_id
    }
    words.forEach( (id,index) => {
        if(/\.|\-|\_|[a-z]|[A-Z]|\d/.test(id)){
            if(id === '.'){
                if(words[index-1] !== '.'){
                    answer = answer+id
                }
            }else{
                answer = answer+id
            }
        }
    });
    words = answer.split("")
    console.log(words)
    if(words[0] === '.'){
        words.splice(0,1)
    }
    if(words[words.length-1]==='.'){
        words.splice(words.length-1)
    }
    if(words.length < 3){
        words.push(words[words.length-1])
    }
    else if(words.length > 16){
        words = words.splice(0,15)
    }
    console.log(words)
    if(words[0] !== '.' && words[words.length-1]!=='.' && words.length > 2 && words.length < 16){
        return words.join("")
    }
    return solution(words);
}

console.log(solution(new_id))

id='#'