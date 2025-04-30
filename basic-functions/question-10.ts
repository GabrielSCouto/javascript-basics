function calculateAge(birthYear: number): number{
    let currentYear = new Date()
    return currentYear.getFullYear() - birthYear
}

const birthYear: number = 2000
console.log(calculateAge(birthYear))

