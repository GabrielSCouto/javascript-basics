
interface Person {
    name: string;
    age: number;
}

function verifyProperty(person: Person, valueCheck: string): boolean {
    return person.name === valueCheck || person.age.toString() === valueCheck;
}

const p1: Person = { name: "João", age: 25 };

console.log(verifyProperty(p1, "João")); 
console.log(verifyProperty(p1, "25"));   
console.log(verifyProperty(p1, "Maria"));
