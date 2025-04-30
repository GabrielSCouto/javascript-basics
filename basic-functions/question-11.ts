function generateTable(num:  number): void{
    let maxNum: number = 1

    while (maxNum < 11){
        console.log(num + " x " + maxNum + " = " + num*maxNum)
        maxNum += 1
    }
}

generateTable(2)

