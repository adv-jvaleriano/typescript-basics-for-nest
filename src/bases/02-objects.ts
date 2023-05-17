interface Person {
    id: number,
    name: string,
    age: number
}

const employee1: Person = {
    id: 23,
    name: "Gabit",
    age: 32
}

const employee2: Person = {
    id: 2,
    name: "Valentina",
    age: 37
}

export const employess: Person[] = []

employess.push(employee1, employee2)
