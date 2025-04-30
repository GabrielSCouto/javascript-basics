function countEvenOdds(num: number): any{
    let even: number = 0
    let odd: number = 0

    for (let i of String(num)){
        if (Number(i) % 2 == 0){
            even += 1
        } else {
            odd += 1
        }
    }
    return "Evens: " + even + ", Odds: " + odd
}

console.log(countEvenOdds(10234))