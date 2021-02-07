
const shadowlink = () => {
    //깊이 우선 탐색을 하며 작은값만 그리고 큰 값만 선택해서 내려와야한다.
    const graph = {100: new Set([67, 66]),
            67: new Set([100, 82, 63]),
            66: new Set([100, 73, 69]),
            82: new Set([67, 61, 79]),
            63: new Set([67]),
            73: new Set([66]),
            69: new Set([66, 65, 81]),
            61: new Set([82]),
            79: new Set([82, 87, 77]),
            65: new Set([69, 84, 99]),
            81: new Set([69]),
            87: new Set([79, 31, 78]),
            77: new Set([79]),
            84: new Set([65]),
            99: new Set([65]),
            31: new Set([87]),
            78: new Set([87])};

return(graph)
    //stack에서 맨 뒤에 pop
    // stack.push(100)
    // for(let j in graph){
    //     let a = stack.pop()
    //     input.push(a)
    //     console.log('input '+input)
    //     if(!a){
    //         break
    //     }
    //     for(let i of graph[a]){
    //         beforestack.push(i)
    //         console.log(i)
    //     }
    //     //stack넣기 전에 sort
    //     if(graph[a].size===3){
    //         beforestack.reverse().pop()
    //     }
    //     beforestack.sort()
    //     // console.log('before '+beforestack)
        
    //     //stack에 넣기
    //     if(graph[a].size===1){
    //         let alonechild = stack.pop()
    //         input.push(alonechild)
    //     }
    //     else{
    //         for(let i of beforestack){stack.push(i)}
    //     }
    //     beforestack=[]
    //     console.log('stack '+stack)
    //     console.log('---------------------')
    // }
  
    
}
const maxTree = (graph) => {
    let beforestack=[]
    let stack=[]
    let input=[]

    stack.push(100)
    while(stack.length>0){
        
        let a = stack.pop()
        input.push(a)
        
        for(let i of graph[a]){
            if(!input.includes(i)){
                beforestack.push(i)
            }
        }
        let max = 0
        if(beforestack.length > 0){
            max = Math.max.apply(null,beforestack);
        }else{
            break
        }
        stack.push(max)
        beforestack.length=0
    }
    let final = ''
    for(let i of input){
        final += String.fromCharCode(i)
    }
    console.log(final)
}
const minTree = (graph) => {
    let beforestack=[]
    let stack=[]
    let input=[]

    stack.push(100)
    while(stack.length>0){
        
        let a = stack.pop()
        input.push(a)
        
        for(let i of graph[a]){
            if(!input.includes(i)){
                beforestack.push(i)
            }
        }
        let min = 0
        if(beforestack.length > 0){
            min = Math.min.apply(null,beforestack);
        }else{
            break
        }
        stack.push(min)
        beforestack.length=0
    }
    let final = ''
    for(let i of input){
        final += String.fromCharCode(i)
    }
    console.log(final)
}

maxTree(shadowlink())
minTree(shadowlink())
