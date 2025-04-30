type Student = [string, number]

function calculateMeanStudents(students: Student[]): number{
    let sum: number = 0
    for (let [,grade] of students){
        sum += grade
    }
    return sum / students.length
}

const students: Student[] = [['Paulo',10],['Maria',8],['Denis',9]]
console.log(calculateMeanStudents(students))