function filterByYear(cars: any[]): any[] {
    let minYear: number = 2010
    let result: any[] = []
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].year > minYear) {
            result.push(cars[i])
        }
    }
    return result
}

let cars: any[] = [
    { brand: "Ford", model: "Fiesta", year: 2010 },
    { brand: "Toyota", model: "Corolla", year: 2015 },
    { brand: "Honda", model: "Civic", year: 2008 }
]

console.log(filterByYear(cars))
