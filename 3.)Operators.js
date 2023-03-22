// && Operator (AND)
const a= 5
const b= -3

console.log(a > 0 && b > 0)

//  || Operator (OR)
const c = 4
const d = -5

console.log(c > 0 || d > 0)


true || false && false; 
(true || false) && false; 


// Ternary Operator
const age= 20
const drink = age >= 21 ? "Beer" : "Juice"
console.log(drink)


const greeting = (person) => {
    const name = person ? person.name : "stranger"

    return `Howdy ${name}`
}

console.log(greeting({name: "Aditya"}))
console.log(greeting(null))