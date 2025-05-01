function fiveChar(str: string[]): string[]{
    let moreThanFive: string[] = []
    for (let i of str){
        if (i.length > 5){
            moreThanFive.push(i)
        }
    }
    return moreThanFive
}

console.log(fiveChar(["History","Hi","Good","Mariah","Pedras"]))