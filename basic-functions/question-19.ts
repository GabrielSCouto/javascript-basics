function findOlder(people: any[]): string {
    let older = people[0]
    for (let i = 1; i < people.length; i++) {
        if (people[i].age > older.age) {
            older = people[i]
        }
    }
    return older.name
}

let people = [
    { name: "Ana", age: 29 },
    { name: "Carlos", age: 42 },
    { name: "Beatriz", age: 35 }
]

console.log(findOlder(people))
