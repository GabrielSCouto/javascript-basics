function listString(list: string[]): void{
    console.log("*********")
    for (let i of list){
        console.log("* " + i + " *")
    }
    console.log("*********")
}
const list: string[] = ["Hello", "World", "in", "a", "frame"]
listString(list)