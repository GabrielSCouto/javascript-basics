function roundMean(numList: number[]): number{
    let sum = 0
    for (let i of numList){
        sum += i
    }
    return Math.round(sum) / numList.length 
}

let numList: number[] = [9.2,6.7]
console.log(roundMean(numList))