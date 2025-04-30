function calculateIncomeTax(sal: number): number {
    let finalSal = sal
    if (sal <= 1903.98) {
        finalSal = sal
    } else if (sal <= 2826.65){
        finalSal = sal - (sal * 0.075)
    } else if (sal <= 3751.05){
        finalSal = sal - (sal * 0.15)
    } else if (sal <= 4664.68){
        finalSal = sal - (sal * 0.225)
    } else {
        finalSal = sal - (sal * 0.275)
    } 

    return finalSal 
}

console.log(calculateIncomeTax(5000).toFixed(2))